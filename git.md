git add .
git commit -m "Updated something"
git push

git config --global alias.quickpush '!f() { git add . && git commit -m "$1" && git push; }; f'
