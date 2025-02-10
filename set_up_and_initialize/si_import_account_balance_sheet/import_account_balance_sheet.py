# import_account_balance_sheet.py

import os
import pandas as pd

def import_account_balance_sheet(request):

    file_path = request.get('data', {}).get('file_path', '')

    file_extension = os.path.splitext(file_path)[1].lower()

    if file_extension == '.xlsx':
        account_balance_df = pd.read_excel(file_path, engine='openpyxl')
    elif file_extension == '.xls':
        account_balance_df = pd.read_excel(file_path, engine='xlrd')
    else:
        return