from flask import Flask, request, render_template
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
import json




app = Flask(__name__)
CORS(app)

engine = create_engine("postgresql://yc3993:20421@35.211.155.104:5432/proj1part2")
db = scoped_session(sessionmaker(bind=engine))

information = []
cusinformation = []


# this part is actually giving tips, route forgot to change
@app.route('/order',methods=['POST'], strict_slashes=False)
def order():
    data = request.get_json()
    print(data)
    email = data['email']
    waiter_id = data['waiter_id']
    tips = data['tips']
    sql1 = '''SELECT c.user_id FROM "Customers" c WHERE c.email = :e'''
    cur = db.execute(sql1,{'e':email})
    db.commit()
    try:
        user_id = cur.mappings().all()[0]['user_id']
        print('get')
    except:
        print('dawda')
        return
    print(user_id)
    sql2 = '''INSERT INTO "Serves" VALUES (:w, :u, :t) '''
    db.execute(sql2,{'w':waiter_id, 'u':user_id, 't':tips})
    db.commit()
    return data

@app.route('/adjustment',methods=['POST'], strict_slashes=False)
def adjustment():
    data = request.get_json()
    print('checking if id exists')
    sql1 = '''SELECT "SSN" FROM ''' + '''"''' + data['staff_cat'] + '''"''' + ''' WHERE "ID" = :id '''
    temp = db.execute(sql1,{'id':data['staff_id']})
    db.commit()
    try:
        temp.mappings().all()[0]['SSN']
    except:
        print('bad request')
        return

    for info in data:
        if data[info] and info != 'staff_cat' and info != 'staff_id':
            print(data[info])
            sql2 = '''UPDATE''' + ''' "''' + data['staff_cat'] + '''" ''' + '''SET ''' + '''"''' + info + '''" ''' \
                + '''= :di WHERE "ID" = :id '''
            db.execute(sql2,{'di':data[info], 'id':data['staff_id']})
            db.commit()
    return {
        "test": "ok"
    }

@app.route('/hire',methods=['POST'], strict_slashes=False)
def hire():

    data = request.get_json()
    print(data)
    sql = '''INSERT INTO ''' + ''' "''' + data['staff_cat'] + '''" ''' \
        + ''' ("name", "SSN", "hired_date", "salary", "shift") VALUES (:nam, :ssn, :dat, :sala, :shif) '''
    db.execute(sql,{'nam':data['name'],'ssn':data['SSN'],'dat':data['date'], 'sala':data['salary'], 'shif':data['shift']})
    db.commit()
    return {
        "test": "ok"
    }

@app.route('/info',methods=['GET','POST'], strict_slashes=False)
def info():
    if request.method == 'POST':
        data = request.get_json()
        sql = '''SELECT * FROM "''' + data['staff_cat'] + '''" WHERE "ID" = :id'''
        temp = db.execute(sql,{'id':data['staff_id']})
        db.commit()
        information.append(temp.mappings().all())
        if not information[0]:
            print('no id')
            information.pop()
            information.append([{'name':'not exists','SSN':'not applicable','hired_date':'not applicable','salary':'not applicable'\
                ,'shift':'not applicable'}])
            return {
                'name': 'dede',
            }
        else:
            return {
                'name': 'dede',
            }
    if request.method == 'GET':
        res = information[0][0]
        information.pop()
        return {
            'sname':res['name'],
            'SSN': res['SSN'],
            'hired_date': res['hired_date'],
            'salary': res['salary'],
            'shift': res['shift'],
        }

@app.route('/info_cus',methods=['GET','POST'], strict_slashes=False)
def info_cus():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        sql = '''SELECT * FROM "Customers" WHERE "user_id" = :cid'''
        temp = db.execute(sql,{'cid':data['cus_id']})
        db.commit()
        cusinformation.append(temp.mappings().all())
        if not cusinformation[0]:
            print('no id')
            cusinformation.pop()
            cusinformation.append([{'user_name':'not exists','email':'not applicable'}])
            # print(cusinformation)
            return {
                'name': 'dede',
            }
        else:
            # print(cusinformation)
            return {
                'name': 'dede',
            }
    if request.method == 'GET':
        res = cusinformation[0][0]
        # print(cusinformation)
        cusinformation.pop()
        # print(cusinformation)
        return {
            'cname':res['user_name'],
            'email': res['email'],
        }


@app.route('/orderfood',methods=['POST'], strict_slashes=False)
def orderfood():
    flag = 0
    #data={}
    data = request.get_json()
    #print(data)

    sql1 =  '''SELECT user_id FROM "Customers" WHERE "email" = :e '''
    temp = db.execute(sql1,{'e':data['email']})
    db.commit()
    global userID
    global price
    try:
        print('exist')
        userID = temp.mappings().all()[0]['user_id']
        print(userID)
    except:
        print('new')
        sql2 = '''INSERT INTO "Customers" (user_name, email) VALUES (:uname, :mail) '''
        db.execute(sql2,{'uname':data['user_name'],'mail':data['email']})
        db.commit()

        print('searching id')
        sql3 = '''SELECT user_id FROM "Customers" WHERE "email" = :em '''
        temp2 = db.execute(sql3,{'em':data['email']})
        db.commit()
        userID = temp2.mappings().all()[0]['user_id']
        print('new user:',userID)
    
    orderPrice = int(data['beef'])*7.99 + int(data['Chicken'])*6.99 + int(data['fish'])*7.99 + int(data['coke'])*1.99 + int(data['fries'])*3.99\
        + int(data['icecream'])*2.99 + int(data['chickenwing'])*5.99
    price = str(int(orderPrice))
    print(price)

    print('inserting into order table')
    for food in ['beef','Chicken','fish','coke','fries','icecream','chickenwing']:
        if data[food] != '0':
            print(data[food])
            if food == 'Chicken':
                food = 'Chicken Burger'
            if food == 'fish':
                food = 'Fish Burger'
            if food == 'coke':
                food = 'Coke'
            if food == 'fries':
                food = 'Fries'
            if food == 'icecream':
                food = 'Icecream'
            if food == 'chickenwing':
                food = 'ChickenWings'
            print(food)
            sql4 = '''SELECT food_id FROM "Dishes" d WHERE d.name = :f '''
            res = db.execute(sql4,{'f':food})
            db.commit()
            food_id = res.mappings().all()[0]['food_id']
            print(food_id)
            print(userID)
            sql5 = '''INSERT INTO "Orders" VALUES (:fid, :uid)'''
            db.execute(sql5,{'fid':food_id,'uid':userID})
            db.commit()
    return {'test':'test'}


@app.route('/chef_shift',methods=['GET'],strict_slashes=False)
def check_shift():
    print('1')
    chef_id = request.args['uname']
    chef_psw = request.args['psw']
    sql = """SELECT c.shift FROM "Chefs" c WHERE c."ID" = :id """
    cur = db.execute(str(sql),{'id':chef_id})
    db.commit()
    rows = []
    for r in cur:
        shift = r['shift']
        rows.append(shift)
    print(rows)

    return json.dumps(rows)

@app.route('/chef_salary',methods=['GET'],strict_slashes=False)
def check_salary():
    print('1')
    chef_id = request.args['uname']
    # print(type(chef_id))
    chef_psw = request.args['psw']
    sql = '''SELECT c.salary FROM "Chefs" c WHERE c."ID" = :id'''
    cur = db.execute(sql,{'id':chef_id})
    db.commit()
    rows = []
    for r in cur:
        salary = r['salary']
        rows.append(salary)
    print(rows)

    return json.dumps(rows)  
    

@app.route('/chef_cook',methods=['POST'],strict_slashes=False)
def chef_cook():
    cook_info = request.get_json()
    print(cook_info)
    sql = '''INSERT INTO "Cooks" VALUES (:cid,:fid,:d)'''
    db.execute(sql,{'cid':cook_info['chef_id'],'fid':cook_info['food_id'],'d':cook_info['date']})
    db.commit()
    return cook_info

@app.route('/cashier_shift',methods=['GET'],strict_slashes=False)
def check_cashier_shift():
    print('1')
    cashier_id = request.args['uname']
    cashier_psw = request.args['psw']
    sql = '''SELECT c.shift FROM "Cashiers" c WHERE c."ID" = :id'''
    cur = db.execute(sql,{'id':cashier_id})
    db.commit()
    rows = []
    for r in cur:
        shift = r['shift']
        rows.append(shift)
    print(rows)

    return json.dumps(rows)

@app.route('/cashier_salary',methods=['GET'],strict_slashes=False)
def check_cashier_salary():
    print('1')
    cashier_id = request.args['uname']
    cashier_psw = request.args['psw']
    sql = '''SELECT c.salary FROM "Cashiers" c WHERE c."ID" = :id'''
    cur = db.execute(sql,{'id':cashier_id})
    db.commit()
    rows = []
    for r in cur:
        salary = r['salary']
        rows.append(salary)
    print(rows)

    return json.dumps(rows)

@app.route('/check',methods=['GET','POST'], strict_slashes=False)
def check():
    global userID
    global price
    print(userID,'  d')
    print(price,'  d')

    if request.method == 'GET':
        return {
            "price": price
        }

    if request.method == 'POST':
        data = request.get_json()
        print(data)
        if not data['res_id']:
            data['res_id'] = 'aF05dAZpGr8eBiI2IkAFaA'
        print(data)
        sql1 = '''INSERT INTO "Visits" ("Customers_user_id", "Restaurants_Business_ID") VALUES (:uid,:rid)'''
        db.execute(sql1,{'uid':userID,'rid':data['res_id']})
        db.commit()
        print(1)
        sql2 = '''SELECT order_id FROM "Visits" WHERE "Customers_user_id" = :userid'''
        temp = db.execute(sql2,{'userid':userID})
        db.commit()

        orderID = temp.mappings().all()[-1]['order_id']
        print(orderID,'orderID')
        print(price)

        sql3 = '''INSERT INTO "Processes" ("Cashiers_ID", "Visits_order_id", payment_method, total_price, date) VALUES (:cid,:oid,:pm,:p,:d)'''
        db.execute(sql3,{'cid':data['cashier_id'],'oid':orderID,'pm':data['payment'],'p':price,'d':data['date']})
        db.commit()

        return {
            "ok": "ok"
        }

@app.route('/waiter_shift',methods=['GET'],strict_slashes=False)
def check_waiter_shift():
    print('1')
    waiter_id = request.args['uname']
    waiter_psw = request.args['psw']
    sql = '''SELECT w.shift FROM "Waiters" w WHERE w."ID" = :id'''
    cur = db.execute(sql,{'id':waiter_id})
    db.commit()
    rows = []
    for r in cur:
        shift = r['shift']
        rows.append(shift)
    print(rows)

    return json.dumps(rows)

@app.route('/waiter_salary',methods=['GET'],strict_slashes=False)
def check_waiter_salary():
    print('1')
    waiter_id = request.args['uname']
    waiter_psw = request.args['psw']
    sql = '''SELECT w.salary FROM "Waiters" w WHERE w."ID" = :id''' 
    cur = db.execute(sql,{'id':waiter_id})
    db.commit()
    rows = []
    for r in cur:
        salary = r['salary']
        rows.append(salary)
    print(rows)

    return json.dumps(rows)

@app.route('/waiter_tips',methods=['GET'],strict_slashes=False)
def check_waiter_tips():
    print('1')
    waiter_id = request.args['uname']
    waiter_psw = request.args['psw']
    sql = '''SELECT SUM(s."Tips") AS res FROM "Serves" s WHERE s."Waiters_ID" = :id''' 
    cur = db.execute(sql,{'id':waiter_id})
    db.commit()
    rows = []
    for r in cur:
        tips = r['res']
        rows.append(tips)
    print(rows)

    return json.dumps(rows)
        


if __name__ == '__main__':
    app.run(debug=False,port=5000,host='0.0.0.0')