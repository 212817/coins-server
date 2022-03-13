module.exports = class UserDto {
  email
  id
  firstName
  lastName
  isActivated

  constructor(model) {
    this.email = model.email
    this.id = model._id
    this.firstName = model.firstName
    this.lastName = model.lastName
    this.isActivated = model.isActivated
  }
}
