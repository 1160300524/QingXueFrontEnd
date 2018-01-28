import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: 1,
    mobile_num: '',
    name: '',
    stage: 1,
    grade: 1,
    user: 1,
    head_photo: '',
    birthday: '',
    add_time: '',
    following: [],
    favourites: [],
    courses: [],
    course_orders: [],
    comment_to_educators: [],
    comment_to_courses: [],
    address: []
  },
  mutations: {
    user_message (state, message) {
      console.log('message:');
      console.log(message);
      state.id = message.data.id;
      state.mobile_num = message.data.mobile_num;
      state.name = message.data.name;
      state.stage = message.data.stage;
      state.grade = message.data.grade;
      state.user = message.data.user;
      state.head_photo = message.data.head_photo;
      state.birthday = message.data.birthday;
      state.add_time = message.data.add_time;
      state.following = message.data.following;
      state.favourites = message.data.favourites;
      state.courses = message.data.courses;
      state.course_orders = message.data.course_orders;
      state.comment_to_educators = message.data.comment_to_educators;
      state.comment_to_courses = message.data.comment_to_courses;
      state.address = message.data.address;
      console.log('state:');
      console.log(state);
    }
  }
})
