# Git

## 常用命令

- 查看所有分支 `git branch -r`
- 查看所有分支 `git branch -a`
- 查看本地分支 `git branch`
- 创建分支 `git branch xxx`
- 基于原分支创建新分支 `git branch <new-branch-name> <existing-branch-name>`
- 推送新分支至远程 `git push origin xx`
- 切换分支 `git checkout xx`
- 删除本地分支 `git branch -d xx`
- 删除远程分支 `git branch -r -d origin/xx` `git push origin :xx`
- 查看提交文件状态：`git status`
- 获取（查询）远程最新变更：`git fetch`
- 将获取的变更合并到本地：`git pull`

## 常见问题及解决方法

### 1. 强制使用一分支代码覆盖另一分支

> 以下假设要将 develop 分支强制覆盖至 master 分支，以下都是 origin 下的直接分支

1. 切换到 develop 分支下，并保证本地已经同步了远端 develop 的最新代码。

   ```
   git checkout develop
   git pull
   ```

2. 把本地的 develop 分支强制(-f)推送到远端 master。

   `git push origin develop:master -f`

3. 切换到旧分支 master。

   `git checkout master`

4. 下载远程仓库最新内容，不做合并。

   `git fetch --all`

5. 把 HEAD 指向 master 最新版本。

   `git reset --hard origin/master`



