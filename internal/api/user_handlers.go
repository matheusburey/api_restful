package api

import (
	"errors"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/matheusburey/api_restful/internal/usecase/users"
	"github.com/matheusburey/api_restful/internal/utils"
)

func (api *Api) HandlerGetAllUser(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("ok"))
}

func (api *Api) HandlerPostUser(w http.ResponseWriter, r *http.Request) {
	data, problems, err := utils.DecodeValidJSON[users.CreateUserReq](r)

	if err != nil {
		utils.EncodeJSON(w, r, http.StatusBadRequest, problems)
		return
	}

	if err := api.UsersService.CreateUser(r.Context(), data.Name, data.Email); err != nil {
		var pgErr *pgconn.PgError
		if errors.As(err, &pgErr) && pgErr.Code == "23505" {
			utils.EncodeJSON(w, r, http.StatusUnprocessableEntity, map[string]string{"error": "email already registered"})
			return
		}
		utils.EncodeJSON(w, r, http.StatusInternalServerError, err)
		return
	}

	w.WriteHeader(http.StatusCreated)
}

func (api *Api) HandlerGetUser(w http.ResponseWriter, r *http.Request) {
	raw_id := chi.URLParam(r, "id")

	if err := uuid.Validate(raw_id); err != nil {
		utils.EncodeJSON(w, r, http.StatusBadRequest, map[string]string{"error": "invalid id"})
		return
	}

	id := uuid.MustParse(raw_id)
	u, err := api.UsersService.GetUserById(r.Context(), id)

	if err != nil {
		utils.EncodeJSON(w, r, http.StatusNotFound, map[string]string{"error": "user not found"})
		return
	}

	utils.EncodeJSON(w, r, http.StatusOK, u)
}

func (api *Api) HandlerDeleteUser(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("ok"))
}

func (api *Api) HandlerUpdateUser(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("ok"))
}
