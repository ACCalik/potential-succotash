package com.mp4c.health.data

import kotlinx.serialization.Serializable

@Serializable
data class FoodEntry(
    val name: String,
    val quantity: String,
    val time: String,
    val calories: Int? = null
)

@Serializable
data class FluidEntry(
    val amountMl: Int,
    val time: String
)

@Serializable
data class MedicationEntry(
    val name: String,
    val dose: String,
    val time: String
)

@Serializable
data class SleepEntry(
    val startTime: String,
    val endTime: String,
    val quality: Int
)

@Serializable
data class SymptomEntry(
    val description: String,
    val time: String
)

@Serializable
data class ActivityEntry(
    val steps: Int,
    val type: String,
    val time: String
)

@Serializable
data class DailyEntry(
    val date: String,
    val foods: MutableList<FoodEntry> = mutableListOf(),
    val fluids: MutableList<FluidEntry> = mutableListOf(),
    val medications: MutableList<MedicationEntry> = mutableListOf(),
    val sleeps: MutableList<SleepEntry> = mutableListOf(),
    val symptoms: MutableList<SymptomEntry> = mutableListOf(),
    val activities: MutableList<ActivityEntry> = mutableListOf()
)
