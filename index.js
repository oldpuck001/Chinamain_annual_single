// index.js

import { select_folder } from './set_up_and_initialize/si_select_folder/select_folder.js';
import { set_up } from './set_up_and_initialize/si_set_up/set_up.js';
import { generate_audit_report } from './audit_procedures/ap_generate_audit_report/generate_audit_report.js';

document.querySelectorAll('.sidebar > ul > li').forEach(item => {
    item.addEventListener('click', function (e) {
        const sublist = this.querySelector('ul');
        if (sublist) {
            e.stopPropagation();
            sublist.classList.toggle('active');
        }
    });
});

document.querySelectorAll('.sidebar ul ul li').forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// 页面加载后自动显示的页面
window.addEventListener('DOMContentLoaded', () => {
    select_folder();
});

window.select_folder = function() {
    select_folder();
}

window.set_up = function() {
    set_up();
}

window.import_account_balance_sheet = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">导入本期科目余额表演示页面</h1>`;
}

window.import_chronological_account = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">导入本期序时账 / 凭证列表演示页面</h1>`;
}

window.import_balance_sheet = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">导入未审资产负债表演示页面</h1>`;
}

window.import_income_statement = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">导入未审利润表演示页面</h1>`;
}

window.import_cash_flow_statement = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">导入未审现金流量表演示页面</h1>`;
}

window.import_previous_trial_balance = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">导入往期试算平衡表演示页面</h1>`;
}

window.initialize = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">初始化演示页面</h1>`;
}

window.walk_through_test = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">穿行测试演示页面</h1>`;
}

window.examine = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">检查演示页面</h1>`;
}

window.observe = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">观察演示页面</h1>`;
}

window.ask = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">询问演示页面</h1>`;
}

window.confirmation = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">函证演示页面</h1>`;
}

window.recalculate = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">重新计算演示页面</h1>`;
}

window.re_execution = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">重新执行演示页面</h1>`;
}

window.analytical_procedures = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">分析性程序演示页面</h1>`;
}

window.edit_trial_balance = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">编辑试算平衡表演示页面</h1>`;
}

window.generate_audit_report = function() {
    generate_audit_report();
}

window.generate_list = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">生成资料清单演示页面</h1>`;
}

window.import_file = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">导入永久性档案演示页面</h1>`;
}

window.initial_business_activities_schedule = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">初步业务活动演示页面</h1>
                            <ul>
                                <li>初步业务活动程序表</li>
                                <li>索引号：AA-1 沟通函</li>
                                <li>索引号：AA-2 沟通函</li>
                                <li>索引号：AA-3 回复函</li>
                            </ul>
                            `;
}

window.business_acceptance_evaluation_form = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">业务承接评价表演示页面</h1>
                            <ul>
                                <li>业务承接评价表</li>
                            </ul>
                            `;
}

window.business_retention_evaluation_form = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">业务保持评价表演示页面</h1>
                            <ul>
                                <li>业务保持评价表</li>
                            </ul>
                            `;
}

window.audit_engagement_letter = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">审计业务约定书演示页面</h1>
                            <ul>
                                <li>合同式</li>
                                <li>信函式</li>
                                <li>确定通用目的编制基础的可接受性</li>
                            </ul>
                            `;
}

window.understanding_environment = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">了解被审计单位及其环境（不包括内部控制）演示页面</h1>
                            <ul>
                                <li>了解被审计单位及其环境（不包括内部控制）</li>
                            </ul>
                            `;
}

window.understanding_internal_controls = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">了解被审计单位内部控制演示页面</h1>
                            <ul>
                                <li>（一）在被审计单位整体层面了解和评价内部控制</li>
                                <li>了解和评价整体层面内部控制汇总表</li>
                                <li>了解和评价控制环境</li>
                                <li>了解和评价被审计单位风险评估过程</li>
                                <li>了解和评价与财务报表相关的信息系统与沟通</li>
                                <li>了解和评价被审计单位对控制的监督</li>
                                <li>（二）在被审计单位业务流程层面了解和评价内部控制</li>
                                <li>1.采购与付款循环</li>
                                <li>了解内部控制</li>
                                <li>了解内部控制汇总表</li>
                                <li>了解业务流程</li>
                                <li>评价控制的设计并确定控制是否得到执行</li>
                                <li>确定控制是否得到执行</li>
                                <li>2.工薪与人事循环</li>
                                <li>了解内部控制</li>
                                <li>了解内部控制汇总表</li>
                                <li>了解业务流程</li>
                                <li>评价控制的设计并确定控制是否得到执行</li>
                                <li>3.生产与仓储循环</li>
                                <li>了解内部控制</li>
                                <li>了解内部控制汇总表 SCL-1</li>
                                <li>了解内部控制汇总表 SCL-2</li>
                                <li>评价控制的设计并确定控制是否得到执行</li>
                                <li>4.销售与收款循环</li>
                                <li>了解内部控制</li>
                                <li>了解内部控制汇总表</li>
                                <li>了解业务流程</li>
                                <li>评价控制的设计并确定控制是否得到执行</li>
                                <li>5.筹资与投资循环</li>
                                <li>了解内部控制</li>
                                <li>了解内部控制汇总表</li>
                                <li>了解业务流程</li>
                                <li>评价控制的设计并确定控制是否得到执行</li>
                                <li>6.固定资产和其他长期资本循环</li>
                                <li>了解内部控制</li>
                                <li>了解内部控制汇总表</li>
                                <li>了解业务流程</li>
                                <li>评价控制的设计并确定控制是否得到执行</li>
                                <li>7.货币资金循环</li>
                                <li>了解内部控制</li>   
                                <li>了解内部控制汇总表</li>
                                <li>了解业务流程</li>
                                <li>评价控制的设计并确定控制是否得到执行</li>
                            </ul>
                            `;
}

window.discuss_risk_assessment = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">项目组讨论纪要———风险评估演示页面</h1>
                            <ul>
                                <li>项目组讨论纪要———风险评估</li>
                            </ul>
                            `;
}

window.risk_assessment_summary = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">风险评估结果汇总表演示页面</h1>
                            <ul>
                                <li>风险评估结果汇总表</li>
                            </ul>
                            `;
}

window.overall_audit_strategy = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">总体审计策略演示页面</h1>
                            <ul>
                                <li>总体审计策略</li>
                                <li>重要性</li>
                            </ul>
                            `;
}

window.purchase_and_payment = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">采购与付款循环演示页面</h1>
                            <ul>
                                <li>控制测试</li>
                                <li>控制测试汇总表</li>
                                <li>控制测试程序和过程记录</li>
                            </ul>
                            `;
}

window.salary_and_personnel = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">工薪与人事循环演示页面</h1>
                            <ul>
                                <li>控制测试</li>
                                <li>控制测试汇总表</li>
                                <li>控制测试程序和过程记录</li>
                            </ul>
                            `;
}

window.production_and_warehousing = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">生产与仓储循环演示页面</h1>
                            <ul>
                                <li>控制测试</li>
                                <li>控制测试汇总表</li>
                                <li>控制测试程序和过程记录</li>
                            </ul>
                            `;
}

window.sales_and_collection = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">销售与收款循环演示页面</h1>
                            <ul>
                                <li>控制测试</li>
                                <li>控制测试汇总表</li>
                                <li>控制测试程序和过程记录</li>
                            </ul>
                            `;
}

window.fundraising_and_investment = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">筹资与投资循环演示页面</h1>
                            <ul>
                                <li>控制测试</li>
                                <li>控制测试汇总表</li>
                                <li>控制测试程序和过程记录</li>
                            </ul>
                            `;
}

window.fixed_assets_and_other_long_term_capital = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">固定资产和其他长期资本循环演示页面</h1>
                            <ul>
                                <li>控制测试</li>
                                <li>控制测试汇总表</li>
                                <li>控制测试程序和过程记录</li>
                            </ul>
                            `;
}

window.monetary_funds_circulation = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">货币资金循环演示页面</h1>
                            <ul>
                                <li>控制测试</li>
                                <li>控制测试汇总表</li>
                                <li>控制测试程序和过程记录</li>
                            </ul>
                            `;
}

window.monetary_funds = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">货币资金演示页面</h1>
                            <ul>
                                <li>货币资金实质性程序</li>
                                <li>货币资金审定表</li>
                                <li>库存现金监盘表</li>
                                <li>银行存款明细表</li>
                                <li>银行存单检查表</li>
                                <li>对银行存款余额调节表的检查</li>
                                <li>银行存款函证结果汇总表</li>
                                <li>银行询证函（格式一）</li>
                                <li>银行询证函（格式二）</li>
                                <li>货币资金收支检查情况表</li>
                                <li>货币资金截止测试表</li>
                            </ul>
                            `;
}

window.settlement_reserve = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">结算备付金演示页面</h1>`;}

window.funds_withdrawn = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">拆出资金演示页面</h1>`;}

window.trading_financial_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">交易性金融资产演示页面</h1>
                            <ul>
                                <li>交易性金融资产实质性程序</li>
                                <li>交易性金融资产审定表</li>
                                <li>交易性金融资产明细表</li>
                                <li>交易性金融资产函证情况汇总表</li>
                                <li>有价证券询证函</li>
                                <li>交易性金融资产监盘表</li>
                                <li>交易性金融资产期末公允价值复核表</li>
                                <li>出售交易性金融资产检查表</li>
                            </ul>
                            `;
}

window.derivative_financial_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">衍生金融资产演示页面</h1>
                            <ul>
                                <li>衍生金融资产</li>
                            </ul>
                            `;
}

window.notes_receivable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应收票据演示页面</h1>
                            <ul>
                                <li>应收票据实质性程序</li>
                                <li>应收票据审定表</li>
                                <li>应收票据明细表</li>
                            </ul>
                            `;
}

window.accounts_receivable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应收账款演示页面</h1>
                            <ul>
                                <li>应收账款实质性程序</li>
                                <li>应收账款审定表</li>
                                <li>应收账款明细表</li>
                                <li>应收账款账龄分析检查表</li>
                                <li>应收账款询证函（格式一）</li>
                                <li>应收账款询证函（格式二）</li>
                                <li>应收账款询证函（格式三）</li>
                                <li>应收账款函证结果汇总表</li>
                                <li>应收账款函证差异调节表检查</li>
                                <li>应收账款替代测试表</li>
                                <li>应收账款坏账准备计算表</li>
                            </ul>
                            `;
}

window.receivables_financing = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应收款项融资演示页面</h1>
                            <ul>
                                <li>应收款项融资</li>
                            </ul>
                            `;
}

window.prepayment = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">预付款项演示页面</h1>
                            <ul>
                                <li>预付款项实质性程序</li>
                                <li>预付款项审定表</li>
                                <li>预付款项明细表</li>
                                <li>预付款项检查表</li>
                            </ul>
                            `;
}

window.premiums_receivable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应收保费演示页面</h1>`;}

window.reinsurance_receivables = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应收分保账款演示页面</h1>`;}

window.reinsurance_contract_reserves_receivable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应收分保合同准备金演示页面</h1>`;}

window.other_receivables = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他应收款演示页面</h1>
                            <ul>
                                <li>应收利息实质性程序</li>
                                <li>应收利息审定表</li>
                                <li>应收利息明细表</li>
                                <li>应收利息检查表</li>
                                <li>应收利息期后收款情况检查表</li>
                                <li>应收股利实质性程序</li>
                                <li>应收股利审定表</li>
                                <li>应收股利明细表</li>
                                <li>应收股利检查表</li>
                                <li>应收股利期后收款情况检查表</li>
                                <li>其他应收款实质性程序</li>
                                <li>其他应收款审定表</li>
                                <li>其他应收款明细表</li>
                                <li>其他应收款替代测试表</li>
                                <li>其他应收款坏账准备计算表</li>
                            </ul>
                            `;
}

window.financial_assets_purchased_under_resale_agreements = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">买入返售金融资产演示页面</h1>`;}

window.stock = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">存货演示页面</h1>
                            <ul>
                                <li>存货实质性程序</li>
                                <li>存货审定表</li>
                                <li>存货类别明细表</li>
                                <li>存货明细表</li>
                                <li>存货入库截止测试</li>
                                <li>存货出库截止测试</li>
                                <li>存货监盘程序</li>
                                <li>存货监盘报告</li>
                                <li>存货监盘结果汇总表</li>
                                <li>存货明细账与盘点报告（记录）核对表</li>
                                <li>存货抽盘核对表</li>
                                <li>存货盘点计划问卷</li>
                                <li>存货抽盘核对表</li>
                                <li>委托代管存货询证函</li>
                                <li>存货计价测试表</li>
                                <li>存货跌价准备测试表</li>
                                <li>生产成本检查表</li>
                                <li>直接材料成本检查表</li>
                                <li>直接人工成本检查表</li>
                                <li>制造费用明细表</li>
                                <li>制造费用检查表</li>
                            </ul>
                            `;
}

window.contract_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">合同资产演示页面</h1>
                            <ul>
                                <li>合同资产</li>
                            </ul>
                            `;
}

window.assets_held_for_sale = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">持有待售资产演示页面</h1>
                            <ul>
                                <li>可供出售金融资产实质性程序</li>
                                <li>可供出售金融资产审定表</li>
                                <li>可供出售金融资产明细表</li>
                                <li>持有至到期投资实质性程序</li>
                                <li>持有至到期投资审定表</li>
                                <li>持有至到期投资明细表</li>
                                <li>持有至到期投资——债券投资利息测算表</li>
                            </ul>
                            `;
}

window.non_current_assets_due_within_one_year = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">一年内到期的非流动资产演示页面</h1>
                            <ul>
                                <li>一年内到期的非流动资产</li>
                            </ul>
                            `;
}

window.other_current_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他流动资产演示页面</h1>
                            <ul>
                                <li>其他流动资产</li>
                            </ul>
                            `;
}

window.loans_and_advances = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">发放贷款和垫款演示页面</h1>`;}

window.debt_investment = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">债权投资演示页面</h1>
                            <ul>
                                <li>债权投资</li>
                            </ul>
                            `;
}

window.other_debt_investments = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他债权投资演示页面</h1>
                            <ul>
                                <li>其他债权投资</li>
                            </ul>
                            `;
}

window.long_term_receivables = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">长期应收款演示页面</h1>
                            <ul>
                                <li>长期应收款实质性程序</li>
                                <li>长期应收款审定表</li>
                                <li>长期应收款明细表</li>
                            </ul>
                            `;
}

window.long_term_equity_investment = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">长期股权投资演示页面</h1>
                            <ul>
                                <li>长期股权投资实质性程序</li>
                                <li>长期股权投资审定表</li>
                                <li>长期股权投资明细表</li>
                            </ul>
                            `;
}

window.other_equity_instrument_investments = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他权益工具投资演示页面</h1>
                            <ul>
                                <li>其他权益工具投资</li>
                            </ul>
                            `;
}

window.other_non_current_financial_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他非流动金融资产演示页面</h1>
                            <ul>
                                <li>其他非流动金融资产</li>
                            </ul>
                            `;
}

window.investment_properties = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">投资性房地产演示页面</h1>
                            <ul>
                                <li>投资性房地产实质性程序</li>
                                <li>投资性房地产审定表</li>
                                <li>投资性房地产明细变动表（成本模式）</li>
                                <li>投资性房地产明细变动表（公允价值模式）</li>
                                <li>投资性房地产检查表</li>
                                <li>投资性房地产产权证明核对表</li>
                                <li>投资性房地产公允价值复核表</li>
                                <li>投资性房地产与自用房地产互转审核表（成本模式）</li>
                                <li>投资性房地产与自用房地产互转审核表（公允价值模式）</li>
                                <li>投资性房地产租金收入测算表</li>
                            </ul>
                            `;
}

window.fixed_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">固定资产演示页面</h1>
                            <ul>
                                <li>固定资产实质性程序</li>
                                <li>固定资产审定表</li>
                                <li>固定产、累计折旧及减值准备明细表</li>
                                <li>固定产盘点检查情况表</li>
                                <li>固定资产增加检查表</li>
                                <li>固定资产减少检查表</li>
                                <li>租赁询证函</li>
                                <li>折旧计算检查表</li>
                                <li>固定资产清理实质性程序</li>
                                <li>固定资产清理审定表</li>
                                <li>固定资产清理明细表</li>
                            </ul>
                            `;
}

window.construction_in_progress = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">在建工程演示页面</h1>
                            <ul>
                                <li>在建工程实质性程序</li>
                                <li>在建工程审定表</li>
                                <li>在建工程明细表</li>
                                <li>在建工程增加检查表</li>
                                <li>在建工程减少检查表</li>
                                <li>工程物资实质性程序</li>
                                <li>工程物资审定表</li>
                                <li>工程物资明细表</li>
                            </ul>
                            `;
}

window.productive_biological_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">生产性生物资产演示页面</h1>
                            <ul>
                                <li>生产性生物资产</li>
                            </ul>
                            `;
}

window.oil_and_gas_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">油气资产演示页面</h1>
                            <ul>
                                <li>油气资产</li>
                            </ul>
                            `;
}

window.right_of_use_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">使用权资产演示页面</h1>
                            <ul>
                                <li>使用权资产</li>
                            </ul>
                            `;
}

window.intangible_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">无形资产演示页面</h1>
                            <ul>
                                <li>无形资产实质性程序</li>
                                <li>无形资产审定表</li>
                                <li>无形资产明细表</li>
                                <li>无形资产使用寿命分析表</li>
                                <li>无形资产累计摊销计算表</li>
                            </ul>
                            `;
}

window.development_expenditure = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">开发支出演示页面</h1>
                            <ul>
                                <li>开发支出实质性程序</li>
                                <li>开发支出审定表</li>
                                <li>研发支出明细表</li>
                            </ul>
                            `;
}

window.goodwill = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">商誉演示页面</h1>
                            <ul>
                                <li>商誉实质性程序</li>
                                <li>商誉增加检查表</li>
                            </ul>
                            `;
}

window.long_term_deferred_expenses = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">长期待摊费用演示页面</h1>
                            <ul>
                                <li>长期待摊费用实质性程序</li>
                                <li>长期待摊费用审定表</li>
                                <li>肠癌待摊费用明细表</li>
                            </ul>
                            `;
}

window.deferred_tax_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">递延所得税资产演示页面</h1>
                            <ul>
                                <li>递延所得税资产实质性程序</li>
                                <li>递延所得税资产审定表</li>
                                <li>递延所得税资产明细表</li>
                                <li>递延所得税资产测算表 ZY3-1</li>
                                <li>递延所得税资产测算表 ZY3-2</li>
                                <li>递延所得税资产检查情况表</li>
                            </ul>
                            `;
}

window.other_non_current_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他非流动资产演示页面</h1>
                            <ul>
                                <li>其他非流动资产</li>
                            </ul>
                            `;
}

window.short_term_loans = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">短期借款演示页面</h1>
                            <ul>
                                <li>短期借款实质性程序</li>
                                <li>短期借款审定表</li>
                                <li>短期借款明细表</li>
                                <li>利息计算检查表</li>
                                <li>短期借款检查表</li>
                            </ul>
                            `;
}

window.borrowing_from_the_central_bank = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">向中央银行借款演示页面</h1>`;}

window.borrowing_funds = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">拆入资金演示页面</h1>`;}

window.trading_financial_liabilities = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">交易性金融负债演示页面</h1>
                            <ul>
                                <li>交易性金融负债实质性程序</li>
                                <li>交易性金融负债审定表</li>
                                <li>交易性金融负债明细表</li>
                                <li>交易性金融负债检查情况表</li>
                            </ul>
                            `;
}

window.derivative_financial_liabilities = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">衍生金融负债演示页面</h1>
                            <ul>
                                <li>衍生金融负债</li>
                            </ul>
                            `;
}

window.notes_payable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应付票据演示页面</h1>
                            <ul>
                                <li>应付票据实质性程序</li>
                                <li>应付票据审定表</li>
                                <li>应付票据明细表</li>
                                <li>应付票据检查表</li>
                            </ul>
                            `;
}

window.accounts_payable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应付账款演示页面</h1>
                            <ul>
                                <li>应付账款实质性程序</li>
                                <li>应付账款审定表</li>
                                <li>应付账款明细报表</li>
                                <li>应付账款替代测试表</li>
                                <li>应付账款核对表</li>
                                <li>未入账应付账款汇总表</li>
                                <li>应付账款日后付款测试表</li>
                                <li>未处理的供应商发票测试表</li>
                            </ul>
                            `;
}

window.advance_payment = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">预收款项演示页面</h1>
                            <ul>
                                <li>预收款项实质性程序</li>
                                <li>预收款项审定表</li>
                                <li>预收款项明细表</li>
                            </ul>
                            `;
}

window.contract_liabilities = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">合同负债演示页面</h1>
                            <ul>
                                <li>合同负债</li>
                            </ul>
                            `;
}

window.selling_and_repurchasing_financial_assets = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">卖出回购金融资产款演示页面</h1>`;}

window.deposits_from_customers_and_interbank_deposits = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">吸收存款及同业存款演示页面</h1>`;}

window.securities_trading_agency = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">代理买卖证券款演示页面</h1>`;}

window.securities_underwriting_agency = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">代理承销证券款演示页面</h1>`;}

window.employee_wages_payable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应付职工薪酬演示页面</h1>
                            <ul>
                                <li>应付职工薪酬实质性程序</li>
                                <li>应付职工薪酬审定表</li>
                                <li>应付职工薪酬明细表</li>
                                <li>应付职工薪酬计提检查表</li>
                                <li>应付职工薪酬分配检查表</li>
                                <li>应付职工薪酬（支付）检查表</li>
                            </ul>
                            `;
}

window.taxes_payable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应交税费演示页面</h1>
                            <ul>
                                <li>应交税费实质性程序</li>
                                <li>应交税费审定表</li>
                                <li>应交税费明细报表</li>
                                <li>应交增值税明细表</li>
                                <li>应交增值税——销项税金测算表</li>
                                <li>应交所得税测算表</li>
                                <li>应交税费检查表</li>
                            </ul>
                            `;
}

window.other_accounts_payable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他应付款演示页面</h1>
                            <ul>
                                <li>应付利息实质性程序</li>
                                <li>应付利息审定表</li>
                                <li>应付利息明细表</li>
                                <li>应付利息计提测算表</li>
                                <li>应付利息检查情况表</li>
                                <li>应付股利实质性程序</li>
                                <li>应付股利审定表</li>
                                <li>应付股利明细表</li>
                                <li>应付股利检查表</li>
                                <li>其他应付款实质性程序</li>
                                <li>其他应付款审定表</li>
                                <li>其他应付款明细表</li>
                                <li>其他应付款替代审计程序表</li>
                                <li>其他应付款检查表</li>
                            </ul>
                            `;
}

window.fees_and_commissions_payable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应付手续费及佣金演示页面</h1>`;}

window.reinsurance_accounts_payable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应付分保账款演示页面</h1>`;}

window.liabilities_held_for_sale = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">持有待售负债演示页面</h1>
                            <ul>
                                <li>持有待售负债</li>
                            </ul>
                            `;
}

window.non_current_liabilities_due_within_one_year = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">一年内到期的非流动负债演示页面</h1>
                            <ul>
                                <li>一年内到期的非流动负债</li>
                            </ul>
                            `;
}

window.other_current_liabilities = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他流动负债演示页面</h1>
                            <ul>
                                <li>其他流动负债</li>
                            </ul>
                            `;
}

window.insurance_contract_reserves = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">保险合同准备金演示页面</h1>`;}

window.long_term_loans = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">长期借款演示页面</h1>
                            <ul>
                                <li>长期借款实质性程序</li>
                                <li>长期借款审定表</li>
                                <li>长期借款明细表</li>
                                <li>利息分配检查表</li>
                                <li>长期借款检查表</li>
                            </ul>
                            `;
}

window.bonds_payable = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">应付债券演示页面</h1>
                            <ul>
                                <li>应付债券实质性程序</li>
                                <li>应付债券审定表</li>
                                <li>应付债券明细表</li>
                                <li>应付债券利息检查表</li>
                                <li>应付债券检查表</li>
                            </ul>
                            `;
}

window.lease_liabilities = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">租赁负债演示页面</h1>
                            <ul>
                                <li>租赁负债</li>
                            </ul>
                            `;
}

window.long_term_payables = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">长期应付款演示页面</h1>
                            <ul>
                                <li>长期应付款实质性程序</li>
                                <li>长期应付款审定表</li>
                                <li>长期应付款明细表</li>
                                <li>长期应付款检查表</li>
                            </ul>
                            `;
}

window.estimated_liabilities = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">预计负债演示页面</h1>
                            <ul>
                                <li>预计负债实质性程序</li>
                                <li>预计负债审定表</li>
                                <li>预计负债明细表</li>
                                <li>预计负债检查表</li>
                            </ul>
                            `;
}

window.deferred_income = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">递延收益演示页面</h1>
                            <ul>
                                <li>递延收益</li>
                            </ul>
                            `;
}

window.deferred_tax_liabilities = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">递延所得税负债演示页面</h1>
                            <ul>
                                <li>递延所得税负债实质性程序</li>
                                <li>递延所得税负债审定表</li>
                                <li>递延所得税负债明细表</li>
                                <li>递延所得税负债测算表 FP3-1</li>
                                <li>递延所得税负债测算表 FP3-2</li>
                                <li>递延所得税负债检查表</li>
                            </ul>
                            `;
}

window.other_non_current_liabilities = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他非流动负债演示页面</h1>
                            <ul>
                                <li>专项应付款实质性程序</li>
                                <li>专项应付款审定表</li>
                                <li>专项应付款明细表</li>
                                <li>专项应付款检查表</li>
                            </ul>
                            `;
}

window.capital = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">实收资本（或股本）演示页面</h1>
                            <ul>
                                <li>实收资本（股本）实质性程序</li>
                                <li>实收资本（股本）审定表</li>
                                <li>实收资本（股本）明细表</li>
                            </ul>
                            `;
}

window.other_equity_instruments = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他权益工具演示页面</h1>
                            <ul>
                                <li>其他权益工具</li>
                            </ul>
                            `;
}

window.capital_reserve = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">资本公积演示页面</h1>
                            <ul>
                                <li>资本公积实质性程序</li>
                                <li>资本公积审定表</li>
                                <li>资本公积明细表</li>
                            </ul>
                            `;
}

window.treasury_stock = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">减：库存股演示页面</h1>
                            <ul>
                                <li>减：库存股</li>
                            </ul>
                            `;
}

window.other_comprehensive_income = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他综合收益演示页面</h1>
                            <ul>
                                <li>其他综合收益</li>
                            </ul>
                            `;
}

window.special_reserves = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">专项储备演示页面</h1>
                            <ul>
                                <li>专项储备</li>
                            </ul>
                            `;
}

window.surplus_reserve = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">盈余公积演示页面</h1>
                            <ul>
                                <li>盈余公积实质性程序</li>
                                <li>盈余公积审定表</li>
                                <li>盈余公积明细表</li>
                            </ul>
                            `;
}

window.general_risk_provision = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">一般风险准备演示页面</h1>`;}

window.undistributed_profit = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">未分配利润演示页面</h1>
                            <ul>
                                <li>未分配利润实质性程序</li>
                                <li>未分配利润审定表</li>
                                <li>未分配利润明细表</li>
                            </ul>
                            `;
}

window.operating_income = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">营业收入演示页面</h1>
                            <ul>
                                <li>营业收入实质性程序</li>
                                <li>营业收入审定表</li>
                                <li>主营业务收入明细表</li>
                                <li>业务/产品销售分析表</li>
                                <li>月度毛利率分析表</li>
                                <li>主营业务收入完整性测试</li>
                                <li>主营业务收入发生测试</li>
                                <li>主营业务收入截止测试 SA7-1</li>
                                <li>主营业务收入截止测试 SA7-2</li>
                                <li>其他业务收入明细表</li>
                            </ul>
                            `;
}

window.interest_income = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">利息收入演示页面</h1>`;}

window.premiums_earned = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">已赚保费演示页面</h1>`;}

window.fee_and_commission_income = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">手续费及佣金收入演示页面</h1>`;}

window.operating_costs = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">营业成本演示页面</h1>
                            <ul>
                                <li>营业成本实质性程序</li>
                                <li>营业成本审定表</li>
                                <li>主营业务成本明细表</li>
                                <li>主营业务成本与上年度比较分析表</li>
                                <li>主要产品单位主营业务成本分析表</li>
                                <li>主营业务成本与收入匹配检查表</li>
                                <li>主营业务成本检查表</li>
                                <li>主营业务成本倒轧表</li>
                                <li>主营业务成本重大调整事项检查表</li>
                                <li>其他业务成本明细表</li>
                            </ul>
                            `;
}

window.interest_expense = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">利息支出演示页面</h1>`;}

window.fees_and_commissions = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">手续费及佣金支出演示页面</h1>`;}

window.surrender_benefit = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">退保金演示页面</h1>`;}

window.net_compensation_expense = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">赔付支出净额演示页面</h1>`;}

window.net_amount_of_insurance_liability_reserve_withdrawal = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">提取保险责任准备金净额演示页面</h1>`;}

window.policy_dividend_payout = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">保单红利支出演示页面</h1>`;}

window.reinsurance_expenses = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">分保费用演示页面</h1>`;}

window.taxes_and_surcharges = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">税金及附加演示页面</h1>
                            <ul>
                                <li>营业税金及附加实质性程序</li>
                                <li>营业税金及附加审定表</li>
                                <li>营业税金及附加明细表</li>
                            </ul>
                            `;
}

window.sales_expenses = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">销售费用演示页面</h1>
                            <ul>
                                <li>销售费用实质性程序</li>
                                <li>销售费用审定表</li>
                                <li>销售费用明细表</li>
                                <li>销售费用检查情况表</li>
                                <li>查找未入账销售费用表</li>
                                <li>销售费用截止测试</li>
                            </ul>
                            `;
}

window.management_fees = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">管理费用演示页面</h1>
                            <ul>
                                <li>管理费用实质性程序</li>
                                <li>管理费用审定表</li>
                                <li>管理费用明细表</li>
                                <li>管理费用检查情况表</li>
                                <li>查找未入账管理费用表</li>
                                <li>管理费用截止测试</li>
                            </ul>
                            `;
}

window.research_and_development_expenses = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">研发费用演示页面</h1>
                            <ul>
                                <li>研发费用</li>
                            </ul>
                            `;
}

window.financial_expenses = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">财务费用演示页面</h1>
                            <ul>
                                <li>财务费用实质性程序</li>
                                <li>财务费用审定表</li>
                                <li>财务费用明细表</li>
                                <li>财务费用检查情况表</li>
                                <li>财务费用截止测试</li>
                            </ul>
                            `;
}

window.other_benefits = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">其他收益演示页面</h1>
                            <ul>
                                <li>其他收益</li>
                            </ul>
                            `;
}

window.investment_income = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">投资收益演示页面</h1>
                            <ul>
                                <li>投资收益实质性程序</li>
                                <li>投资收益审定表</li>
                                <li>投资收益明细表</li>
                            </ul>
                            `;
}

window.exchange_gains = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">汇兑收益演示页面</h1>`;}

window.net_exposure_hedging_income = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">净敞口套期收益演示页面</h1>
                            <ul>
                                <li>净敞口套期收益</li>
                            </ul>
                            `;
}

window.gains_from_changes_in_fair_value = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">公允价值变动收益演示页面</h1>
                            <ul>
                                <li>公允价值变动损益实质性程序</li>
                                <li>公允价值变动损益审定表</li>
                                <li>公允价值变动损益明细表</li>
                            </ul>
                            `;
}

window.credit_impairment_losses = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">信用减值损失演示页面</h1>
                            <ul>
                                <li>信用减值损失</li>
                            </ul>
                            `;
}

window.asset_impairment_losses = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">资产减值损失演示页面</h1>
                            <ul>
                                <li>资产减值损失实质性程序</li>
                                <li>资产减值损失审定表</li>
                                <li>资产减值损失明细表</li>
                                <li>资产减值损失检查情况表</li>
                            </ul>
                            `;
}

window.proceeds_from_asset_disposal = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">资产处置收益演示页面</h1>
                            <ul>
                                <li>资产处置收益</li>
                            </ul>
                            `;
}

window.non_operating_income = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">营业外收入演示页面</h1>
                            <ul>
                                <li>营业外收入实质性程序</li>
                                <li>营业外收入审定表</li>
                                <li>营业外收入明细表</li>
                                <li>营业外收入————债务重组利得过程计算表</li>
                                <li>营业外收入——政府补助明细计算表</li>
                                <li>营业外收入检查情况表</li>
                            </ul>
                            `;
}

window.non_operating_expenses = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">营业外支出演示页面</h1>
                            <ul>
                                <li>营业外支出实质性程序</li>
                                <li>营业外支出审定表</li>
                                <li>营业外支出明细表</li>
                                <li>营业外支出检查情况表</li>
                            </ul>
                            `;
}

window.income_tax_expense = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">所得税费用演示页面</h1>
                            <ul>
                                <li>所得税费用实质性程序</li>
                                <li>所得税费用审定表</li>
                                <li>所得税费用明细表</li>
                                <li>当期所得税计算表</li>
                                <li>纳税调整明细表</li>
                                <li>递延所得税费用计算表</li>
                                <li>所得税费用检查情况表</li>
                            </ul>
                            `;
}

window.fraud_risk_assessment_and_response = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">舞弊风险评估与应对演示页面</h1>
                            <ul>
                                <li>舞弊风险评估与应对</li>
                                <li>舞弊风险因素评价表</li>
                                <li>识别和评估由于舞弊导致的重大错报风险</li>
                                <li>项目组讨论纪要</li>
                                <li>应对评估的由于舞弊导致的重大错报风险</li>
                                <li>就舞弊事项沟通</li>
                            </ul>
                            `;
}

window.considerations_of_laws_and_regulations = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">对法律法规的考虑演示页面</h1>
                            <ul>
                                <li>对法律法规的考虑</li>
                            </ul>
                            `;
}

window.communication_with_former_cpa = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">接受委托后与前任注册会计师的沟通演示页面</h1>
                            <ul>
                                <li>接受委托后与前任注册会计师的沟通</li>
                                <li>沟通函 DC-1</li>
                                <li>沟通函 DC-2</li>
                                <li>沟通函 DC-3</li>
                                <li>确认函 DC-3</li>
                                <li>确认函</li>
                                <li>确认函</li>
                            </ul>
                            `;
}

window.related_parties_and_related_party_transactions = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">关联方及关联方交易演示页面</h1>
                            <ul>
                                <li>关联方及关联方交易</li>
                                <li>风险评估程序和相关工作</li>
                                <li>了解与关联方及其交易相关的控制</li>
                                <li>针对与关联方及其交易相关的重大错报风险的应对措施</li>
                                <li>测试和评价关联方及其交易的会计处理和披露</li>
                            </ul>
                            `;
}

window.going_concern = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">持续经营演示页面</h1>
                            <ul>
                                <li>持续经营</li>
                                <li>持续经营调查表</li>
                            </ul>
                            `;
}

window.audit_of_opening_balances = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">首次接受委托时对期初余额的审计演示页面</h1>
                            <ul>
                                <li>首次接受委托时对期初余额的审计</li>
                            </ul>
                            `;
}

window.accounting_estimates = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">会计估计演示页面</h1>
                            <ul>
                                <li>会计估计（包括公允价值会计估计）和相关披露</li>
                                <li>风险评估程序和相关活动</li>
                                <li>了解与会计估计相关的控制</li>
                                <li>应对评估的重大错报风险</li>
                            </ul>
                            `;
}

window.subsequent_events = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">期后事项演示页面</h1>
                            <ul>
                                <li>期后事项</li>
                            </ul>
                            `;
}

window.corresponding_data = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">对应数据演示页面</h1>
                            <ul>
                                <li>对应数据</li>
                            </ul>
                            `;
}

window.additional_information = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">含有已审计财务报表的文件中的其他信息演示页面</h1>
                            <ul>
                                <li>含有已审计财务报表的文件中的其他信息</li>
                            </ul>
                            `;
}

window.group_financial_statement_audit = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">对集团财务报表审计的特殊考虑演示页面</h1>
                            <ul>
                                <li>对集团财务报表审计的特殊考虑</li>
                                <li>识别重要组成部分</li>
                                <li>了解集团层面控制</li>
                                <li>了解合并过程</li>
                                <li>确定组成部分重要性</li>
                                <li>了解组成部分注册会计师</li>
                                <li>确定对组成部分执行工作执行工作的类型</li>
                                <li>集团审计指令函</li>
                                <li>沟通记录表</li>
                            </ul>
                            `;
}

window.litigation_and_claims = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">诉讼和索赔演示页面</h1>
                            <ul>
                                <li>诉讼和索赔</li>
                                <li>诉讼和索赔事项询证函</li>
                            </ul>
                            `;
}

window.leverage_the_expertise_of_cpas = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">利用注册会计师的专家的工作演示页面</h1>
                            <ul>
                                <li>利用注册会计师的专家的工作</li>
                            </ul>
                            `;
}

window.leverage_management_expertise = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">利用管理层的专家的工作演示页面</h1>
                            <ul>
                                <li>利用管理层的专家的工作</li>
                            </ul>
                            `;
}

window.segment_information = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">分部信息演示页面</h1>
                            <ul>
                                <li>分部信息</li>
                            </ul>
                            `;
}

window.leverage_internal_auditors = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">利用内部审计人员的工作演示页面</h1>
                            <ul>
                                <li>利用内部审计人员的工作</li>
                            </ul>
                            `;
}

window.business_completion_audit = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">业务完成阶段审计工作演示页面</h1>
                            <ul>
                                <li>业务完成阶段审计工作</li>
                            </ul>
                            `;
}

window.misstatement_cumulative_and_evaluation_table = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">错报累积和评价表演示页面</h1>
                            <ul>
                                <li>错报累积和评价表</li>
                                <li>已更正错报汇总表（不包括列报和披露错报</li>
                                <li>已更正的列报和披露错报汇总表</li>
                                <li>未更正错报汇总表（不包括列报和披露错报）</li>
                                <li>未更正的列报和披露错报汇总表</li>
                                <li>评估识别出的错误</li>
                                <li>评价错报的性质</li>
                                <li>与管理层和治理层的沟通</li>
                            </ul>
                            `;
}

window.trial_balance = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">试算平衡表演示页面</h1>
                            <ul>
                                <li>资产负债表试算平衡表</li>
                                <li>利润表试算平衡表</li>
                            </ul>
                            `;
}

window.summary_meeting_minutes = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">总结会会议纪要演示页面</h1>
                            <ul>
                                <li>总结会会议纪要</li>
                            </ul>
                            `;
}

window.communication_with_those_charged_with_governance = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">与治理层的沟通函演示页面</h1>
                            <ul>
                                <li>与治理层的沟通函</li>
                            </ul>
                            `;
}

window.project_manager_review_statement = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">项目经理复核声明书演示页面</h1>
                            <ul>
                                <li>项目经理复核声明书</li>
                            </ul>
                            `;
}

window.project_partner_review_statement = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">项目合伙人复核声明书演示页面</h1>
                            <ul>
                                <li>项目合伙人复核声明书</li>
                            </ul>
                            `;
}

window.quality_control_reviewer_review_statement = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">质量控制复核人复核声明书演示页面</h1>
                            <ul>
                                <li>质量控制复核人复核声明书</li>
                            </ul>
                            `;
}

window.management_statement = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">管理层声明书演示页面</h1>
                            <ul>
                                <li>管理层声明书</li>
                            </ul>
                            `;
}

window.audit_summary = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">审计总结演示页面</h1>
                            <ul>
                                <li>审计总结</li>
                            </ul>
                            `;
}

window.audit_work_completion_checklist = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">审计工作完成情况核对表演示页面</h1>
                            <ul>
                                <li>审计工作完成情况核对表</li>
                            </ul>
                            `;
}

window.issue_audit_report = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">出具审计报告演示页面</h1>
                            <ul>
                                <li>标准无保留意见报告</li>
                                <li>带强调事项段的无保留意见审计报告</li>
                                <li>保留意见审计报告</li>
                                <li>否定意见审计报告</li>
                                <li>无法表示意见审计报告</li>
                            </ul>
                            `;
}

window.archiving_and_exporting = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.border = 'none';
    contentDiv.innerHTML = `<h1 style="text-align: center; width: 100%;">归档与导出演示页面</h1>
                            <ul>
                                <li>索引表</li>
                                <li>永久性档案清单</li>
                            </ul>
                            `;
}

window.onbeforeunload = () => {
    localStorage.clear();
};