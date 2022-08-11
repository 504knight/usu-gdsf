package db

import (
	"testing"

	"github.com/jak103/usu-gdsf/models"
	"github.com/stretchr/testify/assert"
)

func TestMock2(t *testing.T) {
	mongo := Mongo{}
	mongo.Connect()
}

func TestCreateUser1(t *testing.T) {
	mongo := Mongo{}
	mongo.Connect()

	user := models.User{Username: "Rohit", Displayname: "Rohit M"}
	user.SetUUID()
	mongo.CreateUser(user)

	getuser, _ := mongo.GetUserByID(user.ID)

	assert.Equal(t, user.ID, getuser.ID)
}
