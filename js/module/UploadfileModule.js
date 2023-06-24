export default function UploadfileModule() {
    const modalForm = document.querySelector('.modal-form');
    if (modalForm) {
        const dropArea = document.querySelector(".custom-input-file"),
        input = dropArea.querySelector(".input-field"),
        label = dropArea.querySelector(".file-area");
        let file;
        var filename;
    
    
        input.addEventListener("change", function (e) {
        var fileName = e.target.files[0].name;
        console.log(fileName);
        let filedata = `
            <div class="upload-icon is-file">
                <img src="/template/assets/images/check-icon.svg" alt="" />
            </div>
            <span class="txt is-file"> ${fileName} </span>
            `;
        label.innerHTML = filedata;
        });
    }

}