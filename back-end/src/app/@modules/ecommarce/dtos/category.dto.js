"use strict";
exports.__esModule = true;
exports.CategoryDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var base_attribute_dto_1 = require("../../../@base/base-attribute.dto");
var CategoryDto = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryDto, _super);
    function CategoryDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" })
    ], CategoryDto.prototype, "name");
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" })
    ], CategoryDto.prototype, "slug");
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" })
    ], CategoryDto.prototype, "image");
    return CategoryDto;
}(base_attribute_dto_1.BaseAttributeDto));
exports.CategoryDto = CategoryDto;
