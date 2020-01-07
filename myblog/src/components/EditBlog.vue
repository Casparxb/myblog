<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if="!submited">
      <label for>博客标题</label>
      <input type="text" v-model="blog.title" required />

      <label for>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label for>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories" />
        <label for>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories" />
        <label for>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories" />
        <label for>Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories" />
      </div>

      <label for>作者</label>
      <select>
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button @click.prevent="post">编辑博客</button>
    </form>
    <div v-if="submited">
      <h3>您的博客已经发布成功</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <ul>
        <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  //http://jsonplaceholder.typicode.com/posts
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["Henery", "Bukky", "Standy"],
      submited: false
    };
  },
  methods: {
    post() {
      this.$http
        .put("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then(data => {
        //   console.log(data);
          this.submited = true;
        });
    },
    fetchData() {
      // console.log(this.id)
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
        .then(res => {
          this.blog = res.body;
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
  margin-right: 10px;
}

button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;

  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>
