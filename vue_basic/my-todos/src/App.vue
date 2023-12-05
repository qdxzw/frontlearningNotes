<script>

export default {
  data () {
    return {
      todos: JSON.parse(localStorage.getItem("todos"))||[],
      editingIndex:-1,//当前编辑元素的索引
      editingValue:"",//当前编辑元素的值
      visibility:"all",
    }
  },
  methods:{
    // 全选或着全不选
    toggleAll(e){
      this.todos.forEach(item=>{
        item.completed=e.target.checked
      })
    },
    // 增加todo
    addTodo(e){
      // 判断增加的值是否为空，如果不为空则添加到数组里面并展示到页面上
      if(e.target.value.trim()!=""){
        this.todos.push({
        id: Date.now(),
        title: e.target.value.trim(),
        completed: false
      })
      }
      localStorage.setItem("todos",JSON.stringify(this.todos))
      console.log(JSON.parse(localStorage.getItem("todos")));
      this.todos=JSON.parse(localStorage.getItem("todos"))
      // 回车之后，清空输入框中的数据
      e.target.value=""
    },
    // 删除todo
    deleteTodo(todo){
      // indexOf() 方法用于在字符串中查找指定的文本，并返回其首次出现的位置。
      // 如果找不到指定的文本，则返回-1
      this.todos.splice(this.todos.indexOf(todo),1);
      localStorage.setItem("todos",JSON.stringify(this.todos))
    },
    // 编辑todo
    editTodo(index){
      this.editingIndex=index
      this.editingValue=this.todos[index].title
      // console.log(this.editingIndex)
      // console.log(this.editingValue)
    },
    // 编辑_保存
    saveItem(){
      this.todos[this.editingIndex].title=this.editingValue
      localStorage.setItem("todos",JSON.stringify(this.todos))
      this.editingIndex=-1
      this.editingValue=""
    },
    // 编辑_取消
    cancelEdit(){
      this.editingIndex=-1
      this.editingValue=""
    },
    // 根据hash值来显示对应的列表
    onHashChange(){
      const hash=location.hash.replace(/#\/?/,"")
      if(["all","active","completed"].includes(hash)){
          this.visibility=hash
      }else{
        location.hash=''
        this.visibility="all"
      }
    },
    // 清除已经完成的事项
    clearCompleted(){
      this.todos= this.todos.filter(todo=>!todo.completed)
      localStorage.setItem("todos",JSON.stringify(this.todos))
    },
  },computed:{
    filteredTodos(){
      switch(this.visibility){
        case "all":{
          return this.todos
        }
        case "active":{
          return this.todos.filter(todo=>!todo.completed)
        }
        case "completed":{
          return this.todos.filter(todo=>todo.completed)
        }
      }
}
  },
  mounted(){
// hashchange事件，顾名思义，就是hash改变时触发的事件。
// window.location.hash值的变化会直接反应到浏览器地址栏（#后面的部分会发生变化），
// 同时，浏览器地址栏hash值的变化也会触发window.location.hash值的变化，
// 从而触发onhashchange事件。
    window.addEventListener("hashchange",this.onHashChange)
    this.onHashChange()
  },
  // 如果想注册局部指令，组件中也接受一个 directives 的选项
  directives: {
    // Todo之自定义指令实现自动聚焦
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    }
}
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input  class="new-todo" @keydown.enter="addTodo" placeholder="What needs to be done?" autofocus />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" @click="toggleAll" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
       <!-- 遍历数据 -->
        <li v-for="todo,index in filteredTodos" :key="todo.id" :class="{completed:todo.completed}"  @dblclick="editTodo(index)">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <!-- 展示内容 -->
            <label v-if="index!=editingIndex">{{ todo.title }}</label>
            <div v-else style="text-align: center;" >
              <!-- Todo之自定义指令实现自动聚焦 -->
              <input type="text" v-model="editingValue" v-focus="true" >
              <button @click="saveItem">保存</button>
              <button @click="cancelEdit">取消</button>
            </div>
            <button class="destroy" @click="deleteTodo(todo)"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" />
        </li>
      </ul>
    </section>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer" v-show="this.todos.length">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{(this.todos.filter(todo=>!todo.completed)).length}}</strong> <span>{{(this.todos.filter(todo=>!todo.completed)).length>1? "items left":"item left"}}</span></span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a :class="{selected:visibility=='all'}" href="#/all">All</a>
        </li>
        <li>
          <a :class="{selected:visibility=='active'}" href="#/active">Active</a>
        </li>
        <li>
          <a :class="{selected:visibility=='completed'}" href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" @click="clearCompleted">Clear completed</button>
    </footer>
  </section>
</template>

<!-- <style scoped> -->
html,
body {
  margin: 0;
  padding: 0;
}

button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #111111;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}

.hidden {
  display: none;
}

.todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
}

.todoapp input::-moz-placeholder {
  font-style: italic;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
}

.todoapp input::input-placeholder {
  font-style: italic;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
}

.todoapp h1 {
  position: absolute;
  top: -140px;
  width: 100%;
  font-size: 80px;
  font-weight: 200;
  text-align: center;
  color: #b83f45;
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px 16px 16px 60px;
  height: 65px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}

.toggle-all {
  width: 1px;
  height: 1px;
  border: none; /* Mobile Safari */
  opacity: 0;
  position: absolute;
  right: 100%;
  bottom: 100%;
}

.toggle-all + label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 65px;
  font-size: 0;
  position: absolute;
  top: -65px;
  left: -0;
}

.toggle-all + label:before {
  content: '❯';
  display: inline-block;
  font-size: 22px;
  color: #949494;
  padding: 10px 27px 10px 27px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.toggle-all:checked + label:before {
  color: #484848;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.todo-list li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
  border-bottom: none;
}

.todo-list li.editing {
  border-bottom: none;
  padding: 0;
}

.todo-list li.editing .edit {
  display: block;
  width: calc(100% - 43px);
  padding: 12px 16px;
  margin: 0 0 0 43px;
}

.todo-list li.editing .view {
  display: none;
}

.todo-list li .toggle {
  text-align: center;
  width: 40px;
  /* auto, since non-WebKit browsers doesn't support input styling */
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none; /* Mobile Safari */
  -webkit-appearance: none;
  appearance: none;
}

.todo-list li .toggle {
  opacity: 0;
}

.todo-list li .toggle + label {
  /*
		Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
		IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
	*/
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
}

.todo-list li .toggle:checked + label {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E');
}

.todo-list li label {
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  font-weight: 400;
  color: #484848;
}

.todo-list li.completed label {
  color: #949494;
  text-decoration: line-through;
}

.todo-list li .destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #949494;
  transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover,
.todo-list li .destroy:focus {
  color: #c18585;
}

.todo-list li .destroy:after {
  content: '×';
  display: block;
  height: 100%;
  line-height: 1.1;
}

.todo-list li:hover .destroy {
  display: block;
}

.todo-list li .edit {
  display: none;
}

.todo-list li.editing:last-child {
  margin-bottom: -1px;
}

.footer {
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  font-size: 15px;
  border-top: 1px solid #e6e6e6;
}

.footer:before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
  float: left;
  text-align: left;
}

.todo-count strong {
  font-weight: 300;
}

.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
}

.filters li {
  display: inline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover {
  border-color: #db7676;
}

.filters li a.selected {
  border-color: #ce4646;
}

.clear-completed,
html .clear-completed:active {
  float: right;
  position: relative;
  line-height: 19px;
  text-decoration: none;
  cursor: pointer;
}

.clear-completed:hover {
  text-decoration: underline;
}

.info {
  margin: 65px auto 0;
  color: #4d4d4d;
  font-size: 11px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
}

.info p {
  line-height: 1;
}

.info a {
  color: inherit;
  text-decoration: none;
  font-weight: 400;
}

.info a:hover {
  text-decoration: underline;
}

/*
	Hack to remove background from Mobile Safari.
	Can't use it globally since it destroys checkboxes in Firefox
*/
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .toggle-all,
  .todo-list li .toggle {
    background: none;
  }

  .todo-list li .toggle {
    height: 40px;
  }
}

@media (max-width: 430px) {
  .footer {
    height: 50px;
  }

  .filters {
    bottom: 10px;
  }
}

:focus,
.toggle:focus + label,
.toggle-all:focus + label {
  box-shadow: 0 0 2px 2px #cf7d7d;
  outline: 0;
}
</style>

<style>
@import 'https://unpkg.com/todomvc-app-css@2.4.1/index.css';
</style>
