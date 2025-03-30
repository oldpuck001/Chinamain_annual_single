// issue_audit_report.js

const { ipcRenderer } = require('electron');

export async function generate_audit_report() {

    window.project_folder = await ipcRenderer.invoke('get-project-folder');
    const savedResultText = localStorage.getItem('result_text') || '';

    // 獲取 DOM 元素
    const contentDiv = document.getElementById('content');

    // 使用 configData 中的數據設置內容
    contentDiv.innerHTML = `

        <h1>出具审计报告</h1>

        <div class="import">

            <div>
                <label for="auditOpinion">审计意见</label>
                <select id="auditOpinion" name="auditOpinion">
                    <option value="standard">标准无保留意见</option>
                    <option value="non_standard">带强调事项段的无保留意见</option>
                    <option value="qualified">保留意见</option>
                    <option value="adverse">否定意见</option>
                    <option value="disclaimer">无法表示意见</option>
                </select>
            </div>

            <div>
                <label for="reportDate">审计报告出具日期</label>
                <input type="date" id="reportDate" name="reportDate">
            </div>

            <div>
                <label for="reportNumber">报告文号</label>
                <input type="text" id="reportNumber" name="reportNumber" placeholder="XXX会审字【202X】第XXX号">
            </div>

            <div>
                <label for="report_versionNotes">报告版本备注</label>
                <input type="text" id="report_versionNotes" name="report_versionNotes" placeholder="*稿第*版">
            </div>

            <div>
                <label for="reportTemplate">审计报告模板</label>
                <select id="reportTemplate" name="reportTemplate">
                    <option value="standard">默认标准模板</option>
                </select>
            </div>

            <button id="generate_reportBtn">生成审计报告</button>

        </div>
    `;

    // 设置默认日期为当天
    document.addEventListener('DOMContentLoaded', function() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('reportDate').value = today;
    });

    document.getElementById('generate_reportBtn').addEventListener('click', async () => {
        if (!window.project_folder) {
            alert('请先选择项目文件夹！');
            return;
        }

        const data = {
            project_folder: window.project_folder,
            audit_opinion: auditOpinion.value,
            report_date: reportDate.value,
            report_number: reportNumber.value,
            report_version_notes: report_versionNotes.value,
            report_template: reportTemplate.value
        };

        ipcRenderer.send('asynchronous-message', { command: 'generate_audit_report', data: data });
    });

    ipcRenderer.removeAllListeners('asynchronous-reply');
    
    ipcRenderer.on('asynchronous-reply', (event, result) => {
        
        if (result[0] === 'generate_audit_report') {
            alert('生成审计报告成功！');
            localStorage.setItem('result_text', savedResultText + '生成审计报告成功！\n');
        }

    });
}