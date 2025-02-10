// select_folder.js

const { ipcRenderer } = require('electron');

export async function select_folder() {

    const savedResultText = localStorage.getItem('result_text') || '';
    
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = `

        <h1>选择项目文件夹</h1>

        <div class="import">
            <div>
                <label style="width: 10%;">文件夹路径</label>
                <input id="folder_path" type="text">
            </div>

            <div>
                <button id="selectButton">选择文件夹</button>
            </div>
        </div>

        <div class="export">
            <div>
                <label>操作日志：</label>
            </div>
            <div>
                <textarea id="result_output" rows="30"></textarea>
            </div>
        </div>
    `;

    const folder_input = document.getElementById('folder_path');
    folder_input.classList.add('readonly');
    folder_input.readOnly = true;

    const result_textarea = document.getElementById('result_output');
    result_textarea.classList.add('readonly');
    result_textarea.readOnly = true;

    window.project_folder = await ipcRenderer.invoke('get-project-folder');
    folder_input.value = window.project_folder || '';

    // 读取 `localStorage` 中的 result_text 并填充 `textarea`
    result_textarea.value = savedResultText;

    document.getElementById('selectButton').addEventListener('click', async () => {
        // 向主進程發送請求，打開文件選擇對話框
        window.project_folder = await ipcRenderer.invoke('dialog:openDirectory');

        if (!window.project_folder) {
            console.log('Folder selection was canceled.');
            return;
        }

        folder_input.value = window.project_folder;

        const data = {
            project_folder: window.project_folder
        };

        ipcRenderer.send('asynchronous-message', { command: 'select_folder_path', data: data });
    });

    ipcRenderer.on('asynchronous-reply', (event, result) => {
        if (result[0] === 'select_folder_path') {
            result_textarea.value += result[1]['result_message'];               // 追加内容
            localStorage.setItem('result_text', result_textarea.value);         // 存储到 localStorage
        }
    });
}