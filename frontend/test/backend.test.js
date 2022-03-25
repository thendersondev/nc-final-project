const assert = require("chai").assert;
const { fetchUsers, fetchUser, addUser, changeUser, removeUser } = require("../models/model_mock")
const { fetchTrades, fetchTrade, addTrade, changeTrade, removeTrade } = require("../models/model_trades")

before(async function () {
  this.timeout(10000)
  randomNum = Date.now()
  users = await fetchUsers()
  user = await fetchUser("AeVcyHj1WoJ6uxmOCmFl")
  noUser = await fetchUser("XxXxXxXxXxXxXxXxXxXx")
  badUser = await fetchUser("bad_id")
  badNewUser = await addUser({ user: "PotatoPie" })
  newUser = await addUser({ name: "Mystery" , user: "PotatoPie" })
  newUserId = Object.keys(newUser)[0]
  fetchNewUser = await fetchUser(newUserId)
  modifyUser = await changeUser(newUserId , { user: `Dr${randomNum}` })
  fetchModifiedUser = await fetchUser(newUserId)
  badModifyUser = await changeUser(newUserId , { data: "none" })
  modifyBadUser = await changeUser("bad_id",{ user: `Dr${randomNum}` })
  deletedUser = await removeUser(newUserId)
  fetchDeletedUser = await fetchUser(newUserId)
  /*LINEBREAK*/
  trades = await fetchTrades()
  noTrade = await fetchTrade("XxXxXxXxXxXxXxXxXxXx")
  badTrade = await fetchTrade("bad_id")
  badNewTrade = await addTrade({ trade: "PotatoPie" })
  newTrade = await addTrade({ name: "Mystery" , trade: "PotatoPie" })
  newTradeId = Object.keys(newTrade)[0]
  fetchNewTrade = await fetchTrade(newTradeId)
  modifyTrade = await changeTrade(newTradeId , { trade: `Dr${randomNum}` })
  fetchModifiedTrade = await fetchTrade(newTradeId)
  badModifyTrade = await changeTrade(newTradeId , { data: "none" })
  modifyBadTrade = await changeTrade("bad_id",{ trade: `Dr${randomNum}` })
  trade = await fetchTrade(newTradeId)
  deletedTrade = await removeTrade(newTradeId)
  fetchDeletedTrade = await fetchTrade(newTradeId)
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
        assert.typeOf(newUser, "object")
      });
      it('should generate a new userID that can be used to lookup the user', function () {
        const newUserId = Object.keys(newUser)[0]
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
    describe('removeUser', function () {
      it('should return an object', function () {
        assert.typeOf(deletedUser, "object")
      });
      it('should return the removed user ID on a key of "removed"', function () {
        assert.deepEqual(deletedUser, {"removed": `${newUserId}`})
      });
      it('should remove the user so future requests cannot locate it', function () {
        assert.deepEqual(fetchDeletedUser, {"error": "No such user!"})
      });
    });
});


describe('Trades DB', function () {
  describe('fetchTrades', function () {
    it('should return an object', function () {
      assert.typeOf(trades, "object")
    });
    it('should have the user IDs as keys', function () {
      const listTrades = Object.keys(trades)[0]
      assert.lengthOf(listTrades, 20)
    });
    it('should contain objects with the correct key-value pairs', function () {
      for (const listTrades in users) {
          assert.typeOf(users[listTrades],"object");
          assert.hasAllKeys(users[listTrades],{
              "name": "string", 
              "user": "string"
          })
      }
    });
  });
  describe('fetchTrade', function () { 
    it('should return an object', function () {
      assert.typeOf(trade, "object")
    });
    it('should have the trade ID as the key', function () {
      const listTrade = Object.keys(trade)[0]
      assert.lengthOf(listTrade, 20)
    });
    it('should contain an object with the correct key-value pairs', function () {
      for (const listTrade in trade) {
          assert.typeOf(trade[listTrade],"object");
      }
    });
    it('should return an error if trade id is not on db', function () {
      assert.typeOf(noTrade, "object")
      assert.hasAllKeys(noTrade, "error")
      assert.equal(noTrade.error, "No such trade!")
    });
    it('should return an error if user id is not valid', function () {
      assert.typeOf(badTrade, "object")
      assert.hasAllKeys(badTrade, "error")
      assert.equal(badTrade.error, "Bad trade ID")
    });
  });
  describe('addUser', function () {
    it('should reject if all data is not correct', function () {
      assert.hasAllKeys(badNewUser, "error")
      assert.equal(badNewUser.error, "Bad submission")
    });
    it('should return an object', function () {
      assert.typeOf(newUser, "object")
    });
    it('should generate a new userID that can be used to lookup the user', function () {
      const newUserId = Object.keys(newUser)[0]
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
  describe('removeUser', function () {
    it('should return an object', function () {
      assert.typeOf(deletedUser, "object")
    });
    it('should return the removed user ID on a key of "removed"', function () {
      assert.deepEqual(deletedUser, {"removed": `${newUserId}`})
    });
    it('should remove the user so future requests cannot locate it', function () {
      assert.deepEqual(fetchDeletedUser, {"error": "No such user!"})
    });
  });
});




