// 新增一行
function addRow() {
// 獲取表格的 <tbody> 部分
var tableBody = document.getElementById("inspectionTable").getElementsByTagName('tbody')[0];
// 創建一個新的 <tr> 行
var newRow = tableBody.insertRow();
// 在行中新增一個文字輸入欄位"檢驗項目"
var cell1 = newRow.insertCell(0);
cell1.style.textAlign = 'center'; //
var textArea = document.createElement("textarea");
textArea.placeholder = "輸入檢驗項目"; // 提示文字
cell1.appendChild(textArea);
// 在行中新增 "合格/不合格" 勾選框
var cell2 = newRow.insertCell(1);
cell2.style.textAlign = 'center'; //
var okCheckbox = document.createElement("input");
okCheckbox.type = "checkbox";
cell2.appendChild(okCheckbox);
okCheckbox.addEventListener("change", function() {
if (okCheckbox.checked) {
ngCheckbox.checked = false; 
}
});
var cell3 = newRow.insertCell(2);
cell3.style.textAlign = 'center'; //
var ngCheckbox = document.createElement("input");
ngCheckbox.type = "checkbox";
cell3.appendChild(ngCheckbox);
ngCheckbox.addEventListener("change", function() {
if (ngCheckbox.checked) {
okCheckbox.checked = false; 
}
});  
// 在行中新增 "取消" 按鈕
var cell4 = newRow.insertCell(3);
cell4.style.textAlign = 'center'; //
var deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "取消";
deleteBtn.classList.add("delete-btn");
deleteBtn.onclick = function() {
deleteRow(newRow); // 點擊取消按鈕時刪除對應的行
};
cell4.appendChild(deleteBtn);
}
// 刪除指定的行
function deleteRow(row) {
row.remove(); // 移除整個行
}



// 獲取DOM元素
const photoUpload = document.getElementById('photoUpload');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');

// 當選擇文件時觸發
photoUpload.addEventListener('change', function(e) {
const files = e.target.files;  // 取得選擇的所有文件
imagePreviewContainer.innerHTML = '';  // 清空當前的預覽

// 遍歷每一個選擇的文件
for (let i = 0; i < files.length; i++) {
const file = files[i];

// 如果文件是圖片
if (file && file.type.startsWith('image')) {
const reader = new FileReader();

// 讀取文件並顯示預覽
reader.onload = function(event) {
const img = document.createElement('img');
img.src = event.target.result;
img.alt = `預覽圖片 ${i + 1}`;
img.style.maxWidth = '300px'; // 調整預覽圖片大小
img.style.margin = '10px';
img.style.cursor = 'pointer'; // 鼠標懸停時顯示為可點擊

const cancelBtn = document.createElement('button');
cancelBtn.textContent = '取消';
cancelBtn.classList.add('delete-btn');
cancelBtn.style.marginTop = '5px';

// 當取消按鈕被點擊時，清除對應的圖片和取消按鈕
cancelBtn.addEventListener('click', function() {
img.remove();
cancelBtn.remove();
});
// 雙擊放大圖片
img.addEventListener('dblclick', function() {
openImageInFullscreen(event.target.src);
});
// 將圖片和取消按鈕添加到預覽容器
imagePreviewContainer.appendChild(img);
imagePreviewContainer.appendChild(cancelBtn);
};
reader.readAsDataURL(file);  // 開始讀取文件
} else {
alert('請選擇圖片文件');
}}});

// 打開全屏查看圖片
function openImageInFullscreen(src) {
// 創建一個全屏的圖片查看容器
const fullscreenContainer = document.createElement('div');
fullscreenContainer.style.position = 'fixed';
fullscreenContainer.style.top = '0';
fullscreenContainer.style.left = '0';
fullscreenContainer.style.width = '100%';
fullscreenContainer.style.height = '100%';
fullscreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
fullscreenContainer.style.display = 'flex';
fullscreenContainer.style.justifyContent = 'center';
fullscreenContainer.style.alignItems = 'center';
fullscreenContainer.style.zIndex = '1000';
// 創建放大的圖片
const img = document.createElement('img');
img.src = src;
img.style.maxWidth = '90%';
img.style.maxHeight = '90%';
img.style.cursor = 'zoom-out';  // 顯示退出的光標

// 點擊圖片或背景時退出全屏
fullscreenContainer.addEventListener('click', function() {
fullscreenContainer.remove();
});

// 將圖片放入全屏容器
fullscreenContainer.appendChild(img);

// 將全屏容器添加到頁面中
document.body.appendChild(fullscreenContainer);
}

 const assetTypes = ["消費性費用類","非消費性費用類","資產類",];
 const assetTypes2 = ["1484 生產五課","1477 生產三課"];
 const assetTypes3 = ["1731 設備工程部","1771 製程工程部"];
 const assetTypes4 = ["一般用品","器具、模具、設備","儀校設備","工程","修繕","其他",];
 function populateSelect(selectId, data) {
 const selectElement = document.getElementById(selectId);
 selectElement.innerHTML = '<option value="">--請選擇--</option>';
 // 新增選項
 data.forEach(function(item) {
 const option = document.createElement("option");
 option.value = item;
 option.textContent = item;
 selectElement.appendChild(option);
 });
 }
// 填充所有選單
populateSelect("assetType" , assetTypes);
populateSelect("assetType2", assetTypes2);
populateSelect("assetType3", assetTypes3);
populateSelect("assetType4", assetTypes4);