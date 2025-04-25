package api

import (
	"github.com/go-chi/chi/v5"
)

func (api *Api) BindRoutes() {
	api.Router.Route("/api", func(r chi.Router) {
		r.Route("/v1", func(r chi.Router) {
			r.Route("/users", func(r chi.Router) {
				r.Get("/", api.HandlerGetAllUser)
				r.Post("/", api.HandlerPostUser)
				r.Get("/{id}", api.HandlerGetUser)
				r.Delete("/{id}", api.HandlerDeleteUser)
				r.Put("/{id}", api.HandlerUpdateUser)
			})
		})
	})
}
