import mongoose from 'mongoose';

const watchHistorySchema = new mongoose.Schema(
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
    required: true,
  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    watchHistory: {
      type: [watchHistorySchema],
    },
  },
  { timestamps: true },
);

userSchema.index({ username: 1 }, { unique: true });
userSchema.index({ email: 1 }, { unique: true });

export const User = mongoose.model('User', userSchema);
