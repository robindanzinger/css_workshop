tmux has-session -t cssworkshop
if [ $? != 0 ]
then
  tmux new-session -s cssworkshop -n editor -d
  tmux new-window -n git -t cssworkshop
  tmux split-window -h -t cssworkshop:2
  tmux send-keys -t cssworkshop:1 'vim -S .vimsession' C-m
  tmux send-keys -t cssworkshop:2.1 'npm run start' C-m
  tmux send-keys -t cssworkshop:2.1 'git status' C-m
fi
tmux attach -t cssworkshop:1


