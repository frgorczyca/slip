package main

import "time"

type EveningSurveyRecord struct {
	ID   int       `json:"id"`
	Time time.Time `json:"start_time"`
}
