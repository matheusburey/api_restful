package users

import (
	"context"

	"github.com/matheusburey/api_restful/internal/utils"
)

type UserReqBody struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

func (req UserReqBody) Valid(ctx context.Context) utils.Evaluator {
	var eval utils.Evaluator

	eval.CheckField(utils.NotBlank(req.Name), "name", "name is required")
	eval.CheckField(utils.MinLength(req.Name, 5) && utils.MaxLength(req.Name, 100), "name", "min length is 5 and max length is 100")
	eval.CheckField(utils.NotBlank(req.Email), "email", "email is required")
	eval.CheckField(utils.IsEmail(req.Email), "email", "email is invalid")
	eval.CheckField(utils.MinLength(req.Email, 10) && utils.MaxLength(req.Email, 255), "email", "min length is 10 and max length is 255")

	return eval
}
