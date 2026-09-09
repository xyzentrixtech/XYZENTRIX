
from django.db import models


class CompanyProfile(models.Model):
    # Company Info
    company_name = models.CharField(max_length=100, default="XYZENTRIX")
    tagline = models.CharField(max_length=200, default="Imagine What's Next.")

    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    website = models.URLField(blank=True)
    address = models.TextField(blank=True)

    logo = models.ImageField(upload_to="company/", blank=True, null=True)

    facebook = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    x_twitter = models.URLField(blank=True)
    youtube = models.URLField(blank=True)

    # ==========================
    # Hero Section (V1.1)
    # ==========================
    hero_title = models.CharField(
        max_length=150,
        default="AI-Powered Digital Solutions"
    )

    hero_subtitle = models.TextField(
        default="Building intelligent websites, automation, and AI solutions for modern businesses."
    )

    hero_primary_button = models.CharField(
        max_length=50,
        default="Get Started"
    )

    hero_secondary_button = models.CharField(
        max_length=50,
        default="Our Services"
    )

    hero_image = models.ImageField(
        upload_to="hero/",
        blank=True,
        null=True
    )

    hero_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Company Profile"
        verbose_name_plural = "Company Profile"

    def __str__(self):
        return self.company_name


class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.CharField(
        max_length=50,
        default="Sparkles",
        help_text="Lucide icon name (Sparkles, Bot, Globe, Code, Shield, Database)",
    )

    order = models.PositiveIntegerField(default=0)
    active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.title


class PortfolioProject(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()

    image = models.ImageField(upload_to="portfolio/", blank=True, null=True)

    technologies = models.CharField(
        max_length=255,
        help_text="Example: React, Django, PostgreSQL",
    )

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)

    featured = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self):
        return self.title