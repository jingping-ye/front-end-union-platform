<template>
  <input v-show="false"
    ref="uploadFile"
    type="file"
    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    @change="selectFile" />
</template>
<script>
export default {
  methods: {
    // 上传文件
    importFile() {
      this.$refs.uploadFile.click();
    },
    // 选择文件
    selectFile() {
      let uploadFileIpt = this.$refs.uploadFile;
      let uploadFilePath = uploadFileIpt.value;
      if (uploadFilePath) {
        let uploadFile = this.$refs.uploadFile.files[0];
        if (this.validateFile(uploadFilePath, uploadFile)) {
          this.uploadFileRequest(uploadFile);
        }
      }
    },
    // 校验文件
    validateFile(fileName, file) {
      let fileSuffix = fileName.slice(fileName.lastIndexOf(".") + 1);
      let allowSuffix = ["xlsx", "xls"];

      const isExcel = allowSuffix.indexOf(fileSuffix) !== -1;
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isExcel) {
        this.$message.warning("上传文件只能是xlsx格式！");
      }
      if (!isLt2M) {
        this.$message.warning("上传文件大小不能超过2MB!");
      }
      return isExcel && isLt2M;
    },
    /**
     * HTTP REQUEST
     * 上传文件
     */
    uploadFileRequest(file) {
      this.buttonConfig.importFile.prop.loading = true;
      const formData = new FormData();
      formData.append("uploadFile", file);
      CustPermAPI.importFile(formData)
        .then((res) => {
          if (objHasKey(res, "filename")) {
            this.getErrorImportFileRequest(res.filename);
          } else {
            this.$message.success(res);
            this.buttonConfig.importFile.prop.loading = false;
          }
        })
        .catch((err) => {
          console.log("err", err);
          this.buttonConfig.importFile.prop.loading = false;
        });
    },
  },
};
</script>
