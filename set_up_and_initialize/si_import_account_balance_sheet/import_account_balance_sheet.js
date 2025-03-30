// import_account_balance_sheet.js

const { ipcRenderer } = require('electron');

let file_path = '';
let save_path = '';

export async function import_account_balance_sheet() {

    // 獲取 DOM 元素
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = `

        <h1>导入本期科目余额表</h1>
        
        <div class="import">
            <div>
                <label>源数据文件</label>
                <input id="file_path" type="text">
            </div>

            <div>
                <label for="sheetDropdown">选择工作表</label>
                <select id="sheetDropdown" name="sheetDropdown"></select>
            </div>

            <div>
                <label for="account_idDropdown">选择科目代码列</label>
                <select id="account_idDropdown" name="account_idDropdown"></select>
            </div>





            <div>
                <button id="importButton">导入源文件</button>
            </div>
        </div>
    `;

    var file_path_input = document.getElementById('file_path');
    file_path_input.classList.add('readonly');
    file_path_input.readOnly = true;

    const sheetDropdown = document.getElementById('sheetDropdown');
    const columnDropdown = document.getElementById('columnDropdown');
    const cleaning_modeDropdown = document.getElementById('cleaning_modeDropdown');

}