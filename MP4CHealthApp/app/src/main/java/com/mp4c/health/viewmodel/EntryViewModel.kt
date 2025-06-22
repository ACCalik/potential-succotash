package com.mp4c.health.viewmodel

import androidx.lifecycle.ViewModel
import com.mp4c.health.data.DailyEntry

class EntryViewModel : ViewModel() {
    val currentEntry = DailyEntry(date = "")
}
