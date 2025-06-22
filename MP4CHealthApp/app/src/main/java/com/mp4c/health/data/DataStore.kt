package com.mp4c.health.data

import android.content.Context
import kotlinx.serialization.encodeToString
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import java.io.File

class DataStore(private val context: Context) {
    private val json = Json { prettyPrint = true }
    private val file: File = File(context.filesDir, "entries.json")

    fun load(): MutableList<DailyEntry> {
        if (!file.exists()) return mutableListOf()
        val text = file.readText()
        if (text.isBlank()) return mutableListOf()
        return json.decodeFromString(text)
    }

    fun save(entries: List<DailyEntry>) {
        file.writeText(json.encodeToString(entries))
    }
}
