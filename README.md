1.js文件请放在statics/js/目录下;

2.使用的图片请放到statics/image/目录下;

3.导航栏的图标已添加成为静态文件,可以使用require(image!xxx)的方式来使用;

4.组件中的方法,要添加注释,包括(param,return),具体格式参考index.android.js文件中的注释;

5.和后台交互的URL在statics/js/UrlConfig.js文件中;

6.有问题及时交流;

7.每天git操作
  ```
  1.先使用git pull origin dev 更新本地代码
  2.完成一个节点后，使用git add -A 提交代码，再使用git commit -m "xxxx" 提交代码，引号之间将你提交的内容描述的详细一点
  3.最后使用git push origin dev 上传到远程版本库中
  ```
