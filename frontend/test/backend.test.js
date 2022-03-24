const assert = require("chai").assert;
const expect = require("chai").expect;
const fs = require("fs/promises");
const { fetchUsers, fetchUser, addUser, changeUser } = require("../models/model_users")

let users, user = ""
before(async function () {
    randomNum = Date.now()
    users = await fetchUsers()
    user = await fetchUser("AeVcyHj1WoJ6uxmOCmFl")
    badUser = await fetchUser("bad_id")
    noUser = await fetchUser("XxXxXxXxXxXxXxXxXxXx")
    newUser = await addUser({ name: "Mystery" , user: "PotatoPie" })
    badNewUser = await addUser({ user: "PotatoPie" })
    newUserId = Object.keys(newUser)[0]
    fetchNewUser = await fetchUser(newUserId)
    modifyUser = await changeUser(newUserId , { user: `Dr${randomNum}` })
    modifyBadUser = await changeUser("XxXxXxXxXxXxXxXxXxXx" , { user: `Dr${randomNum}` })
    badModifyUser = await changeUser(newUserId , { data: "none" })
    fetchModifiedUser = await fetchUser(newUserId)
});

describe('Users DB', function () {
    describe('fetchUsers', function () {
      it('should return an object', function () {
        assert.typeOf(users, "object")
      });
      it('should have the user IDs as keys', function () {
        const listUser = Object.keys(users)[0]
        assert.lengthOf(listUser, 20)
      });
      it('should contain objects with the correct key-value pairs', function () {
        for (const listUser in users) {
            assert.typeOf(users[listUser],"object");
            assert.hasAllKeys(users[listUser],{
                "name": "string", 
                "user": "string"
            })
        }
      });
    });
    describe('fetchUser', function () { 
      it('should return an object', function () {
        assert.typeOf(user, "object")
      });
      it('should have the user ID as the key', function () {
        const listUser = Object.keys(users)[0]
        assert.lengthOf(listUser, 20)
      });
      it('should contain an object with the correct key-value pairs', function () {
        for (const listUser in users) {
            assert.typeOf(users[listUser],"object");
            assert.hasAllKeys(users[listUser],{
                "name": "string", 
                "user": "string"
            })
        }
      });
      it('should return an error if user id is not on db', function () {
        assert.typeOf(noUser, "object")
        assert.hasAllKeys(noUser, "error")
        assert.equal(noUser.error, "No such user!")
      });
      it('should return an error if user id is not valid', function () {
        assert.typeOf(badUser, "object")
        assert.hasAllKeys(badUser, "error")
        assert.equal(badUser.error, "Bad user ID")
      });
    });
    describe('addUser', function () {
      it('should reject if all data is not correct', function () {
        assert.hasAllKeys(badNewUser, "error")
        assert.equal(badNewUser.error, "Bad submission")
      });
      it('should return an object', function () {
        assert.typeOf(users, "object")
      });
      it('should generate a new userID that can be used to lookup the user', function () {
        assert.exists(fetchNewUser)
        assert.notExists(fetchNewUser.error)
      });
      it('should return the new user details', function () {
        const listUser = Object.keys(newUser)[0]
        assert.hasAllKeys(newUser[listUser],{
          "name": "string", 
          "user": "string"
        })
      });
    });
    describe('changeUser', function () {
      it('should return an object', function () {
        assert.typeOf(modifyUser, "object")
      });
      it('should return the updated user', function () {
        for (const listUser in users) {
            assert.typeOf(users[listUser],"object");
            assert.hasAllKeys(users[listUser],{
                "name": "string", 
                "user": "string"
            })
        }
        assert.deepEqual(fetchModifiedUser, modifyUser)
      });
      it('should reject if the correct data keys have no been given', function () {
        assert.typeOf(badModifyUser, "object")
        assert.hasAllKeys(badModifyUser, "error")
        assert.equal(badModifyUser.error, "Bad submission")
      });
      it('should return an error if an incorrect userId is given', function () {
        assert.typeOf(modifyBadUser, "object")
        assert.hasAllKeys(modifyBadUser, "error")
        assert.equal(modifyBadUser.error, "No such user!")
      });
    });
    describe('changeUser', function () {
      it('should return an object', function () {
        assert.typeOf(modifyUser, "object")
      });
    });
});

