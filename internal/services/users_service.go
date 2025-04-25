package services

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/matheusburey/api_restful/internal/store/pgstore"
)

type UsersService struct {
	p *pgxpool.Pool
	q *pgstore.Queries
}

func NewUsersService(p *pgxpool.Pool) *UsersService {
	return &UsersService{p: p, q: pgstore.New(p)}
}

func (us *UsersService) CreateUser(ctx context.Context, name, email string) error {
	u := pgstore.CreateUserParams{Name: name, Email: email}

	if _, err := us.q.CreateUser(ctx, u); err != nil {
		return err
	}
	return nil
}
