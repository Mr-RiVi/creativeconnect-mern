import mongoose from 'mongoose';

const innovationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    industry: {
      type: String,
      require: true,
    },
    stage: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },

    //Market potential................
    targetMarket: {
      type: String,
    },
    marketSize: {
      type: String,
    },
    demand: {
      type: String,
    },
    uniqueSellingProposition: {
      type: String,
    },
    levelOfCompetitionInTargetMarket: {
      type: String,
    },
    marketingStrategies: {
      type: String,
    },
    TimeToPenetrateMarketAndAchieveProfitability: {
      type: String,
    },

    //Competitive Pricing Analysis..........
    estimatedCost: {
      type: String,
    },
    targetSellingPrice: {
      type: String,
    },
    competition: {
      type: String,
    },
    pricingFactors: {
      type: String,
    },
    targetMarketRevenue: {
      type: String,
    },

    //Funding needs...........................
    fundingNeeded: {
      type: String,
    },
    useOfFunds: {
      type: String,
    },
    potentialSources: {
      type: String,
    },

    //Intellectual property information
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);
