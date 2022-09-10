const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 chars"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Please enter a valid email",
    },
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 4,
  },

  // ticket:{
  //   type:mongoose.Schema.Types.ObjectId,
  // 	ref: 'ticket'
  // }


});
UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));


UserSchema.path("password").validate(function () {
  console.log(this.password, this._confirmPassword)
  if (this.password != this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords do not match");
  }
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    bcrypt.hash(this.password, 10).then((hashedPassword) => {
      this.password = hashedPassword;
      next();
    });
  }
});


module.exports = mongoose.model("User", UserSchema);
