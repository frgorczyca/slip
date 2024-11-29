package main

import (
	"encoding/json"
	"log"
	"os"
	"os/exec"
)

type GarminConfig struct {
	DB struct {
		Type string `json:"type"`
	} `json:"db"`
	Garmin struct {
		Domain string `json:"domain"`
	} `json:"garmin"`
	Credentials struct {
		User           string `json:"user"`
		SecurePassword bool   `json:"secure_password"`
		Password       string `json:"password"`
	} `json:"credentials"`
	Data struct {
		WeightStartDate          string `json:"weight_start_date"`
		SleepStartDate           string `json:"sleep_start_date"`
		RhrStartDate             string `json:"rhr_start_date"`
		MonitoringStartDate      string `json:"monitoring_start_date"`
		DownloadLatestActivities int    `json:"download_latest_activities"`
		DownloadAllActivities    int    `json:"download_all_activities"`
	} `json:"data"`
	Directories struct {
		RelativeToHome bool   `json:"relative_to_home"`
		BaseDir        string `json:"base_dir"`
		MountDir       string `json:"mount_dir"`
	} `json:"directories"`
	EnabledStats struct {
		Monitoring bool `json:"monitoring"`
		Steps      bool `json:"steps"`
		Itime      bool `json:"itime"`
		Sleep      bool `json:"sleep"`
		Rhr        bool `json:"rhr"`
		Weight     bool `json:"weight"`
		Activities bool `json:"activities"`
	} `json:"enabled_stats"`
	CourseViews struct {
		Steps []interface{} `json:"steps"`
	} `json:"course_views"`
	Modes struct {
	} `json:"modes"`
	Activities struct {
		Display []interface{} `json:"display"`
	} `json:"activities"`
	Settings struct {
		Metric                   bool     `json:"metric"`
		DefaultDisplayActivities []string `json:"default_display_activities"`
	} `json:"settings"`
	Checkup struct {
		LookBackDays int `json:"look_back_days"`
	} `json:"checkup"`
}

func SetGarminCredentials(email string, password string) {
	filePath := "GarminDB/garmindb/GarminConnectConfig.json.example"
	file, err := os.OpenFile(filePath, os.O_RDWR, 0644)
	if err != nil {
		log.Fatalf("failed to open file: %v", err)
	}
	defer file.Close()

	var config GarminConfig
	decoder := json.NewDecoder(file)
	if err := decoder.Decode(&config); err != nil {
		log.Fatalf("failed to decode JSON: %v", err)
	}

	config.Credentials.User = email
	config.Credentials.Password = password

	file.Seek(0, 0)
	file.Truncate(0)

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")
	if err := encoder.Encode(&config); err != nil {
		log.Fatalf("failed to encode JSON: %v", err)
	}
}

func PullGarminData(initial bool) {
	if initial {
		exec.Command("/GarminDb", "make create_dbs")
	} else {
		exec.Command("/GarminDb", "make")
	}
}
