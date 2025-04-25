package utils

import (
	"context"
	"regexp"
	"strings"
	"unicode/utf8"
)

type Evaluator map[string]string

type Validator interface {
	Valid(context.Context) Evaluator
}

func (e *Evaluator) AddFieldError(key, message string) {
	if *e == nil {
		*e = make(map[string]string)
	}
	if _, exist := (*e)[key]; !exist {
		(*e)[key] = message
	}
}

func (e *Evaluator) CheckField(ok bool, key, message string) {
	if !ok {
		e.AddFieldError(key, message)
	}
}

func NotBlank(value string) bool {
	return strings.TrimSpace(value) != ""
}

func MinLength(value string, length int) bool {
	return utf8.RuneCountInString(value) >= length
}

func MaxLength(value string, length int) bool {
	return utf8.RuneCountInString(value) <= length
}

func Match(value string, rx *regexp.Regexp) bool {
	return rx.MatchString(value)
}
