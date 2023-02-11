import pandas as pd
from pandasql import sqldf

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

