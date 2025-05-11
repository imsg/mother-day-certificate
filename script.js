/**
 * 获取DOM元素
 */
const motherNameInput = document.getElementById('motherName');
const childNameInput = document.getElementById('childName');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const certificate = document.getElementById('certificate');
const motherNameDisplay = document.getElementById('motherNameDisplay');
const childNameDisplay = document.getElementById('childNameDisplay');

/**
 * 生成证书
 * @description 用户输入后直接替换内容，无需隐藏证书。
 */
generateBtn.addEventListener('click', () => {
    const motherName = motherNameInput.value.trim();
    const childName = childNameInput.value.trim();

    if (!motherName || !childName) {
        alert('请输入母亲和子女的姓名！');
        return;
    }

    motherNameDisplay.textContent = motherName;
    childNameDisplay.textContent = childName;
});

/**
 * 下载证书
 * @description 使用html2canvas生成图片，useCORS: true，兼容Vercel等线上环境。
 */
downloadBtn.addEventListener('click', async () => {
    try {
        const canvas = await html2canvas(certificate, {
            scale: 2,
            useCORS: true,
            backgroundColor: null
        });
        const link = document.createElement('a');
        link.download = '母亲节奖状.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (error) {
        console.error('生成图片时出错：', error);
        alert('生成图片时出错，请确保已通过服务器访问网页，并检查图片路径！');
    }
}); 