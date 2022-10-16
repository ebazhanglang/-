<template>
  <div>
    <el-upload
      v-loading="loading"
      action="#"
      list-type="picture-card"
      :on-preview="onPreview"
      :on-remove="onRemove"
      :file-list="fileList"
      :on-change="onChange"
      :http-request="httpRequest"
      class="uploadImg"
      :limit="1"
      :before-upload="beforeUpload"
    >
      <i class="el-icon-plus" />
    </el-upload>

    <el-dialog
      title="图片预览"
      :visible.sync="visible"
      width="50%"
    >
      <img style="width:100%" :src="previewImg">
    </el-dialog>
  </div>
</template>

<script>
import COS from 'cos-js-sdk-v5'
const cos = new COS({
  SecretId: 'AKIDhNzVq0tjTCsddgfXGldAh5KevCg7bzCE',
  SecretKey: '0oNlUnZJmAOUO6bu2CE7oGVD7i9QXUrD'
})
export default {
  name: 'UploadImg',
  props: {
    employeesAvatar: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      fileList: [],
      visible: false,
      previewImg: '',
      loading: false
    }
  },
  watch: {
    employeesAvatar() {
      this.fileList.push({
        url: this.employeesAvatar,
        name: 'default'
      })
    }
  },
  methods: {
    onPreview(file) {
      this.previewImg = file.url
      this.visible = true
    },
    onRemove(file, fileList) {
      this.fileList = fileList
    },
    onChange(file, fileList) {
      this.fileList = fileList
    },
    httpRequest({ file }) {
      this.loading = true
      cos.putObject({
        Bucket: 'hz-33-1314348630', /* 填入您自己的存储桶，必须字段 */
        Region: 'ap-shanghai', /* 存储桶所在地域，例如ap-beijing，必须字段 */
        Key: file.name, /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */
        Body: file, /* 必须，上传文件对象，可以是input[type="file"]标签选择本地文件后得到的file对象 */
        onProgress: function(progressData) {
          // console.log(JSON.stringify(progressData))
        }
      }, (err, data) => {
        if (err) return this.$message.error('图片上传失败')
        this.loading = false
        this.$emit('on-success', {
          imgUrl: 'https://' + data.Location
        })
      })
    },
    beforeUpload(file) {
      const types = ['image/jpeg', 'image/gif', 'image/bmp']
      if (!types.includes(file.type)) {
        this.$message.error('上传图片只能是 JPG、GIF、BMP、PNG 格式!')
        return false
      }
      const maxSize = 1 * 1024 * 1024
      if (file.size > maxSize) {
        this.$message.error('上传的图片不允许超过1MB')
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.uploadImg {
  width: 148px;
  height: 148px;
  overflow: hidden;
}
</style>
