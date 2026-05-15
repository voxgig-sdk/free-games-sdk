package core

type FreeGamesError struct {
	IsFreeGamesError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFreeGamesError(code string, msg string, ctx *Context) *FreeGamesError {
	return &FreeGamesError{
		IsFreeGamesError: true,
		Sdk:              "FreeGames",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FreeGamesError) Error() string {
	return e.Msg
}
