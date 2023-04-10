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
    marketPotential: {
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
      competitivePricingAnalysis: {
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
      },
    },

    //Funding needs...........................
    fundingNeeds: {
      fundingNeeded: {
        type: String,
      },
      useOfFunds: {
        type: String,
      },
      potentialSources: {
        type: String,
      },
    },

    //Intellectual property information..........
    intellectualPropertyInformation: {
      patentNumber: {
        type: String,
      },
      patentFilingDate: {
        type: Date,
      },
      trademarkRegistrationNumber: {
        type: String,
      },
      trademarkFilingDate: {
        type: Date,
      },
      copyrightRegistrationNumber: {
        type: String,
      },
      copyrightFilingDate: {
        type: Date,
      },
    },

    //Team information....................
    teamMembers: [
      {
        memberName: {
          type: String,
        },
        role: {
          type: String,
        },
        email: {
          type: String,
        },
        contactNumber: {
          type: String,
        },
        industryExperience: {
          type: String,
        },
        education: {
          type: String,
        },
        yearsOfExperience: {
          type: String,
        },
        availability: {
          type: String,
        },
        languageProficiency: {
          type: String,
        },
        backgroundAndSkills: {
          type: String,
        },
        contributionsToTheInnovation: {
          type: String,
        },
        relationshipToTheInnovation: {
          type: String,
        },
      },
    ],

    //Contact Informations..........
    contactInformation: {
      contactName: {
        type: String,
      },
      email: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
      address: {
        type: String,
      },
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const createInnovation = mongoose.model('innovation', innovationSchema);
export default createInnovation;
