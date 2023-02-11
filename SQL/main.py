import pandas as pd

# Lectura de las tablas
print('TABLE ACTIVITY')
activity_df = pd.read_csv('./data/activity_202302101644.csv')
print(activity_df)
print(' ')

print('TABLE BUDGET')
budget_df = pd.read_csv('./data/budget_202302101644.csv')
print(budget_df)
print(' ')

print('TABLE CUBICATED QUANTITIES')
cubicated_quantities_df = pd.read_csv('./data/cubicated_quantities_202302101644.csv')
print(cubicated_quantities_df)
print(' ')

print('TABLE MATERIAL')
material_df = pd.read_csv('./data/material_202302101644.csv')
print(material_df)
print(' ')

print('TABLE PURCHASE ORDER')
purchase_df = pd.read_csv('./data/purchase_order_details_202302101644.csv')
print(purchase_df)
print(' ')

print('RELEASED QUANTITIES')
released_quantities_df = pd.read_csv('./data/released_quantities_202302101644.csv')
print(released_quantities_df)
print(' ')

print('TABLE TICKET')
ticket_df = pd.read_csv('./data/ticket_202302101644.csv')
print(ticket_df)
print(' ')

print('TABLE TICKET DETAILS')
ticket_details_df = pd.read_csv('./data/ticket_details_202302101644.csv')
print(ticket_details_df)
print(' ')

# Consulta
print('GROUP BY CUBITATED QUANTITIES')
sum_cubicated_quantities_df = cubicated_quantities_df.groupby('material_id')['quantity'].sum()
print(sum_cubicated_quantities_df)
print(' ')

print('GROUP BY RELEASED QUANTITIES')
sum_released_quantities_df = released_quantities_df.groupby('material_id')['quantity'].sum()
print(sum_released_quantities_df)
print(' ')

print('GROUP BY PURCHASED QUANTITIES')
sum_purchase_quantities_df = purchase_df.groupby('material_id')['quantity'].sum()
print(sum_purchase_quantities_df)
print(' ')

print('GROUP BY TICKETS')
sum_tickets_df = ticket_details_df.groupby('material_id')['quantity'].sum()
print(sum_tickets_df)
print(' ')

# La fórmula es cubicated - purchased - (released - tickets)
print('FINAL QUANTITY TO PURCHASE')
quantity = sum_cubicated_quantities_df - sum_purchase_quantities_df - (
    sum_released_quantities_df.subtract(sum_tickets_df, fill_value=0))
quantity = quantity.to_frame()
join = pd.merge(material_df, quantity, left_on='id', right_on='material_id')
print(join)

'''
La consulta de todos los pasos es
SELECT m.id, m.name, q.quantity FROM (
    SELECT c.material_id, c.quantity - p.quantity - (r.quantity - CASE WHEN t.quantity IS NULL 0 THEN t.quantity) AS quantity
    FROM cubicated_quantities_df AS c
    INNER JOIN released_quantities_df AS r
    ON r.material_id = c.material_id 
    INNER JOIN purchase_df as p
    ON p.material_id = c.material_id
    RIGHT JOIN ticket_details_df as t
    ON t.material_id = c.material_id
) AS q
INNER JOIN material_df AS m
ON m.material_id = q.material_id
'''