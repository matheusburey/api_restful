package api

import (
	"github.com/go-chi/chi/v5"
	"github.com/matheusburey/api_restful/internal/services"
)

type Api struct {
	Router       *chi.Mux
	UsersService services.UsersService
}
