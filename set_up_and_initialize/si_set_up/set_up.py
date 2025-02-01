# set_up.py

import os
import json
import pandas as pd

def import_config(request):

    folder_path = request.get('data', {}).get('project_folder', '')

    settings_path = os.path.join(folder_path, '项目数据', 'settings.json')

    with open(settings_path, 'r', encoding='utf-8') as f:
        settings_dict = json.load(f)

    return ['import_config', settings_dict]

def import_qcc(request):

    qcc_file_path = request.get('data', {}).get('qcc_file_path', '')

    file_extension = qcc_file_path.split('.')[-1]

    if file_extension == 'xls':
        engine = 'xlrd'
    elif file_extension == 'xlsx':
        engine = 'openpyxl'
    else:
        pass

    basic_info_df = pd.read_excel(qcc_file_path, sheet_name='基本信息', engine=engine)
    
    # 提取所需信息
    enterprise_name = basic_info_df.iloc[1, 1]               # 企业名称
    date_of_establishment = basic_info_df.iloc[4, 3]         # 成立日期
    approval_date = basic_info_df.iloc[7, 1]                 # 核准日期
    unified_social_credit_code = basic_info_df.iloc[4, 1]    # 统一社会信用代码
    registered_capital = basic_info_df.iloc[2, 3]            # 注册资本
    legal_representative = basic_info_df.iloc[2, 1]          # 法定代表人
    registered_address = basic_info_df.iloc[13, 1]           # 注册地址
    business_scope = basic_info_df.iloc[15, 1]               # 经营范围
    
    # 创建一个字典来保存这些信息
    info_dict = {
        '企业名称': [enterprise_name],
        '成立日期': [date_of_establishment],
        '核准日期': [approval_date],
        '统一社会信用代码': [unified_social_credit_code],
        '注册资本': [registered_capital],
        '法定代表人': [legal_representative],
        '注册地址': [registered_address],
        '经营范围': [business_scope]
    }
    
    # 返回数据字典和保存路径
    return ['import_qcc', info_dict]

def save_settings(request):

    folder_path = request.get('data', {}).get('project_folder', '')

    settings_path = os.path.join(folder_path, '项目数据', 'settings.json')

    period = request.get('data', {}).get('period', '')
    deadline = request.get('data', {}).get('deadline', '')
    accounting_firm = request.get('data', {}).get('accounting_firm', '')
    password = request.get('data', {}).get('password', '')
    enterprise_name = request.get('data', {}).get('enterprise_name', '')
    date_of_establishment = request.get('data', {}).get('date_of_establishment', '')
    approval_date = request.get('data', {}).get('approval_date', '')
    unified_social_credit_code = request.get('data', {}).get('unified_social_credit_code', '')
    registered_capital = request.get('data', {}).get('registered_capital', '')
    legal_representative = request.get('data', {}).get('legal_representative', '')
    registered_address = request.get('data', {}).get('registered_address', '')
    business_scope = request.get('data', {}).get('business_scope', '')

    with open(settings_path, 'r', encoding='utf-8') as f:
        settings_dict = json.load(f)

    settings_dict['被审计会计期间'] = period
    settings_dict['被审计会计报表截止日'] = deadline
    settings_dict['会计师事务所名称'] = accounting_firm
    settings_dict['保护单元格工作表密码'] = password
    settings_dict['企业名称'] = enterprise_name
    settings_dict['成立日期'] = date_of_establishment
    settings_dict['核准日期'] = approval_date
    settings_dict['统一社会信用代码'] = unified_social_credit_code
    settings_dict['注册资本'] = registered_capital
    settings_dict['法定代表人'] = legal_representative
    settings_dict['注册地址'] = registered_address
    settings_dict['经营范围'] = business_scope

    # 使用 UTF-8 编码写入 JSON 文件
    with open(settings_path, 'w', encoding='utf-8') as f:
        json.dump(settings_dict, f, indent=4)

    # 返回成功信息
    return ['save_settings']