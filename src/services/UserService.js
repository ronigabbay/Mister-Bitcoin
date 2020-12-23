import { utilService } from './util-service';
import moment from 'moment';
// var moment = require('moment');

export default {
  getUser,
  signup,
  addMove,
  saveUser
}

const KEY = 'userDb'
let gUsers = _getUsers()

function getUser() {
  var user = utilService.loadFromStorage(KEY)
  if (!user) return gUsers[0] 
  // {
  //   name: "Ochoa Hyde",
  //   coins: 100,
  //   moves: []
  // }
  return user
}

function _getUsers() {
  let users = JSON.parse(localStorage.getItem('users'));
  if (!users || !users.length) {
    users = [];
    localStorage.setItem('users', JSON.stringify(users))
  }
  return users
}


function signup(name) {
  var user = {
    name: name,
    coins: 100,
    moves: [],
    _id: _makeId(),
    imgUrl: `https://robohash.org/${name}?set=set5`
  }
  utilService.storeToStorage(KEY, user)
  gUsers.unshift(user)
  localStorage.setItem('users', JSON.stringify(gUsers))
  return user
}

function addMove(contact, amount) {
  return {
    toId: contact._id,
    to: contact.name,
    // {moment(move.at).format('MMMM Do YYYY, h:mm:ss a')}
    // at: moment(new Date).format('MMMM Do YYYY, h:mm:ss a'),
    at: new Date,
    amount: amount
  }
}

function saveUser(user) {
  utilService.storeToStorage(KEY, user)
  _updateUser(user)
}


function _updateUser(user) {
  const userIdx = gUsers.findIndex(currUser => currUser._id === user._id)
  if (userIdx !== -1) {
      gUsers.splice(userIdx, 1, user)
      localStorage.setItem('users', JSON.stringify(gUsers))
  }
}

function _makeId(length = 10) {
  let txt = '';
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
