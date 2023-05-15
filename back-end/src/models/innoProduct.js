import mongoose from 'mongoose'

const entDetailSchema = new mongoose.Schema(
    {
      entId: {
        type: String,
        required: true,
        unique: true,
      },
      entName: {
        type: String,
        required: true,
      },
      entEmail: {
        type: String,
        require: true,
        unique: false,
      },
      entContact: {
        type: Number,
        require: true,
        unique: false,
      },
      entComName: {
        type: String,
        require: true,
        unique: false,
      },
      entComEmail: {
        type: String,
        require: true,
        unique: false,
      },
      entComCountry: {
        type: String,
        require: true,
        unique: false,
      },
      entComDes: {
        type: String,
        require: true,
        unique: false,
      },
  
      // product Ideas
      productIdeas: [
        {
          prodId: {
            type: String,
            required: true,
          },
          ideaName: {
            type: String,
          },
          ideaDescription: {
            type: String,
          },
          ideaIndustry: {
            type: String,
          },
          ideaBudget: {
            type: Number,
          },
          ideaImg: {
            type: String,
          },
        },
      ],
    },
    {
      versionKey: false,
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
  );
  
  const EntDetail = mongoose.model('entDetail', entDetailSchema);
  export default EntDetail;
  