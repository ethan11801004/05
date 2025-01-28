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








// 上傳圖片
const fileInput = document.getElementById('fileInput');
const imageContainer = document.getElementById('imageContainer');
const largeImage = document.getElementById('largeImage');
const largeImageContent = document.getElementById('largeImageContent');
const closeBtn = document.getElementById('closeBtn');

fileInput.addEventListener('change', (e) => {
const files = e.target.files;
for (let i = 0; i < files.length; i++) {
const file = files[i];
const reader = new FileReader();
reader.onload = function(event) {
const imgElement = document.createElement('img');
imgElement.src = event.target.result;
imgElement.alt = file.name;
imgElement.onload = function() {
const imageBox = document.createElement('div');
imageBox.classList.add('image-box');
                        
// 添加取消按鈕
const cancelBtn = document.createElement('span');
cancelBtn.classList.add('cancel-btn');
cancelBtn.textContent = 'X';
cancelBtn.onclick = function() {
imageContainer.removeChild(imageBox);
};
 // 把圖片和取消按鈕放入容器
imageBox.appendChild(imgElement);
imageBox.appendChild(cancelBtn);
                        
// 設定雙擊放大圖片
imageBox.addEventListener('dblclick', () => {
largeImage.style.display = 'block';
largeImageContent.src = imgElement.src;
});

// 添加到顯示區域
imageContainer.appendChild(imageBox);
};
};
reader.readAsDataURL(file);
}
});
// 關閉放大的圖片
closeBtn.addEventListener('click', () => {
largeImage.style.display = 'none';
});


