const app = new Vue({
  el: '#app', // Vueが管理する一番外側のDOM要素
  
  vuetify: new Vuetify(),
  data: {
    // Vue内部で使いたい変数は全てこの中に定義する
    task: '',
    state: '未了',
    todoList: [], // これは配列
  //}, 
  //
    sizes: ['未了', '実施中', '完了'],
        }, 
    

 //
  //
  methods: {
    // 関数はここ
    addTaskaaa: function() {
      console.log('あああ');
    },
    buttonaddClicked:function(){
    window.alert('タスク追加しました。頑張りましょう！')     
    },
    buttondelClicked:function(){
    window.alert('タスク完了ですね。さすがです！')     
    },
    addTask: function() {
      console.log('次のタスクが追加されました：', this.task,this.state);
      // 配列の先頭に現在のタスク内容を追加する（最後尾の場合はpush）
      
      this.todoList.unshift(this.state + "　　" + this.task);
      //this.todoList.unshift(this.task);
      console.log('現在のToDo一覧：', this.todoList);
      this.task = '';
    },
    // 以下を追加、関数名はなんでもよい
    clearAll: function() {
      this.todoList = [];
      console.log('全てのToDoが消去されました');
    },
    removeTodo: function(index) {
      this.todoList.splice(index,1);
      console.log('削除するやつ：', this.todoList);
      console.log('削除するやつ：', index,this.todoList);
   //   console.log('aaa');
    },
  },
});