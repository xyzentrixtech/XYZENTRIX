from django.db import models


class CompanyProfile(models.Model):
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

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Company Profile"
        verbose_name_plural = "Company Profile"

    def __str__(self):
        return self.company_name