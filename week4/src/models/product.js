const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const ProductSchema = new Schema({
	name: { type: String, required: true },
	image: String,
	thumbnail: String,
	shortDescription: String,
	salePrice: Number,
	originalPrice: SchemaTypes.Number,
	images: [SchemaTypes.String],
	thumbnails: [SchemaTypes.String],
	categoryId: {
		type: SchemaTypes.String,
		ref: 'Category',
		localField: 'categoryId',
		foreignField: '_id',
	},
});

ProductSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty('_sort')) {
		const isValidType = ['asc', 'desc'].includes(req.query.type);
		return this.sort({
			[req.query.column]: isValidType ? req.query.type : 'desc',
		});
    return this;
	}
}

ProductSchema.virtual('saleOff').get(function () {
	return this.originalPrice ? (this.originalPrice - this.salePrice) / this.originalPrice : 0;
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
