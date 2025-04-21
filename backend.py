# backend.py

import sys
import json
from set_up_and_initialize.si_select_folder import select_folder
from set_up_and_initialize.si_set_up import set_up
from set_up_and_initialize.si_import_account_balance_sheet import import_account_balance_sheet
from set_up_and_initialize.si_import_chronological_account import import_chronological_account

from audit_procedures.ap_generate_audit_report import generate_audit_report

# windows下解决编码问题的语句
import io
sys.stdin = io.TextIOWrapper(sys.stdin.buffer, encoding='utf-8')

def main():
    
    # 從標準輸入讀取數據
    input_data = sys.stdin.read()

    # 將數據轉換為 Python 對象
    request = json.loads(input_data)

    # 處理數據（這裡我們假設收到的是計算請求）
    if request["command"] == "select_folder_path":
        result = select_folder.select_folder_path(request)

    elif request["command"] == "import_config":
        result = set_up.import_config(request)

    elif request["command"] == "import_qcc":
        result = set_up.import_qcc(request)

    elif request["command"] == "save_settings":
        result = set_up.save_settings(request)

    elif request["command"] == "import_account_balance_sheet":
        result = import_account_balance_sheet.import_account_balance_sheet(request)

    elif request["command"] == "index_account_balance_sheet":
        result = import_account_balance_sheet.index_account_balance_sheet(request)

    elif request["command"] == "export_account_balance_sheet":
        result = import_account_balance_sheet.export_account_balance_sheet(request)

    elif request["command"] == "import_chronological_account":
        result = import_chronological_account.import_chronological_account(request)

    elif request["command"] == "index_chronological_account":
        result = import_chronological_account.index_chronological_account(request)

    elif request["command"] == "export_chronological_account":
        result = import_chronological_account.export_chronological_account(request)





    elif request["command"] == "generate_audit_report":
        result = generate_audit_report.generate_audit_report(request)


    else:
        result = "Unknown command"

    # 返回結果
    response = {"result": result}
    print(json.dumps(response))
    sys.stdout.flush()

if __name__ == "__main__":
    main()