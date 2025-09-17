# 🏥 Health Calculator Pro

> A modern, comprehensive, and user-friendly health calculator suite built with vanilla JavaScript, HTML5, and CSS3. Features include BMI calculations, body fat percentage, waist-to-hip ratio assessment, macronutrient planning, unit conversions, ideal weight calculations, calorie needs estimation, PWA support, and complete SEO optimization.

![Health Calculator Pro Preview](assets/images/og-image.jpg)

## ✨ Features

### 🧮 Core Calculator Suite
- **BMI Calculator** - Real-time BMI calculation with comprehensive health assessment
- **Body Fat Calculator** - Multiple measurement methods (Navy, Circumference, Skinfold)
- **Waist-to-Hip Ratio Calculator** - WHO guidelines-based health risk assessment
- **Macro Calculator** - Complete macronutrient and TDEE planning with fitness goals
- **Ideal Weight Calculator** - Multiple scientific formulas (Robinson, Devine, Miller, Hamwi)
- **Calorie Calculator** - BMR and TDEE calculations with activity levels and goals

### 🔄 Advanced Unit Support
- **Multiple Unit Support** - Supports metric (kg/cm), imperial (lbs/ft/in), and mixed units
- **Comprehensive Unit Converter** - Built-in converters for height and weight
- **Interactive Unit Converters** - Dedicated height and weight converters with real-time results
- **Smart Unit Detection** - Automatic unit recognition and conversion

### 📊 Health Assessment Features
- **Body Composition Analysis** - Navy Method, Circumference Method, and Skinfold measurements
- **Health Risk Assessment** - WHO guidelines for waist-to-hip ratio evaluation
- **Macronutrient Distribution** - Goal-based macro calculations (weight loss, maintenance, gain)
- **BMI Category Classification** - Underweight, Normal, Overweight, Obese with color coding
- **Personalized Recommendations** - Health tips and advice based on calculations

### 🎨 User Experience
- **Responsive Design** - Mobile-first, works on all devices
- **Accessibility Features** - WCAG compliant, keyboard navigation, screen reader friendly
- **Progressive Web App (PWA)** - Install on device, offline functionality
- **Form Persistence** - Remembers your inputs between sessions

### 🌍 Internationalization & SEO
- **Complete SEO Optimization** - Meta tags, Open Graph, Twitter Cards
- **Search Engine Ready** - Structured data, sitemap, robots.txt
- **Social Media Sharing** - Share results on Twitter, WhatsApp
- **Copy to Clipboard** - Easy sharing of calculation results
- **Performance Optimized** - Fast loading, efficient caching
- **Health Content Blog** - Comprehensive health and fitness articles

## 🏗️ Project Structure

```
📦 Health Calculator Pro
├── 📄 index.html                  # Main homepage
├── 📄 README.md                   # Project documentation
├── 📂 assets/                     # Organized asset files
│   ├── 📂 css/                    # Stylesheets
│   │   ├── 📄 styles.css          # Main CSS with green theme
│   │   ├── 📄 optimized-styles.css # Optimized styles
│   │   ├── 📄 mobile-responsive.css # Mobile optimizations
│   │   └── 📄 accessibility.css   # Accessibility enhancements
│   ├── 📂 js/                     # JavaScript files
│   │   ├── 📄 script.js           # Main application logic
│   │   ├── 📄 bmi-optimized.js    # BMI calculator logic
│   │   ├── 📄 precise-converter.js # Unit conversion utilities
│   │   └── 📄 sw.js               # Service Worker for PWA
│   ├── 📂 icons/                  # Favicon and app icons
│   │   ├── 📄 favicon.ico         # Browser favicon
│   │   ├── 📄 favicon.png         # PNG favicon (32x32)
│   │   └── 📄 favicon.svg         # Scalable vector icon
│   └── 📂 images/                 # Images and graphics
│       ├── 📄 og-image.jpg        # Open Graph social media image
│       ├── 📂 blog-images/        # Blog article images
│       └── 📂 tools-images/       # Calculator tool images
├── 📂 tools/                      # Calculator tools directory
│   ├── 📄 index.html              # Tools overview page
│   ├── 📄 ideal-weight-calculator.html # Ideal weight calculator
│   ├── 📄 calorie-calculator.html # Calorie needs calculator
│   ├── 📄 body-fat-calculator.html # Body fat percentage calculator
│   ├── 📄 waist-hip-ratio-calculator.html # WHR calculator
│   └── 📄 macro-calculator.html   # Macronutrient calculator
├── 📂 blog/                       # Health and fitness blog
│   ├── 📄 index.html              # Blog homepage
│   ├── 📄 bmi-calculator-guide-beginners.html
│   ├── 📄 understanding-bmi-body-composition-guide.html
│   ├── 📄 healthy-diet-plans-bmi-categories.html
│   ├── 📄 bmi-fitness-exercise-effects-body-mass-index.html
│   ├── 📄 ideal-weight-vs-bmi-comprehensive-comparison.html
│   ├── 📄 safe-weight-loss-strategies.html
│   └── 📄 bmi-accuracy-limitations-health-assessment.html
├── 📄 _headers                    # Netlify headers configuration
├── 📄 _redirects                  # Netlify redirects configuration
├── 📄 humans.txt                  # Human-readable project info
├── 📄 manifest.json               # PWA manifest
├── 📄 netlify.toml                # Netlify deployment config
├── 📄 robots.txt                  # Search engine crawler instructions
├── 📄 rss.xml                     # RSS feed for updates
└── 📄 sitemap.xml                 # XML sitemap for SEO
```

## 🚀 Quick Start

### 📋 Prerequisites
- Modern web browser (Chrome 60+, Firefox 55+, Safari 11+, Edge 79+)
- No additional dependencies required - runs in pure HTML/CSS/JavaScript

### 🔧 Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/your-username/health-calculator-pro.git
   cd health-calculator-pro
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or serve with a local server for full PWA functionality

3. **Local Development Server** (Optional)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access Application**
   - Navigate to `http://localhost:8000` or open `index.html` directly

## 💻 Usage Guide

### 🧮 Health Calculator Suite

**1. BMI Calculator:**
   - Calculate Body Mass Index with comprehensive health assessment
   - Supports multiple units (metric, imperial, mixed)
   - Provides BMI category classification and health recommendations
   - Real-time calculation as you type

**2. Body Fat Calculator:**
   - **Navy Method:** Uses waist, neck, and hip measurements
   - **Circumference Method:** Multiple body site measurements
   - **Skinfold Method:** 3-site skinfold density calculations
   - Gender-specific formulas for accurate results
   - Health risk assessment based on body fat percentage

**3. Waist-to-Hip Ratio Calculator:**
   - WHO guidelines-based health risk assessment
   - Cardiovascular disease risk evaluation
   - Body shape analysis (apple vs pear shape)
   - Gender-specific risk categories

**4. Macro Calculator:**
   - Complete macronutrient planning tool
   - TDEE (Total Daily Energy Expenditure) calculation
   - Goal-based adjustments (weight loss, maintenance, muscle gain)
   - Macro distribution for carbs, protein, and fats
   - Activity level and fitness goal integration

**5. Ideal Weight Calculator:**
   - Multiple scientific formulas (Robinson, Devine, Miller, Hamwi)
   - Height and gender-based calculations
   - Healthy weight range recommendations

**6. Calorie Calculator:**
   - BMR calculation using Mifflin-St Jeor equation
   - TDEE with activity level multipliers
   - Weight loss, maintenance, and weight gain calories
   - Personalized recommendations based on goals

### ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + K` - Focus height input
- `Ctrl/Cmd + Enter` - Calculate results
- `Ctrl/Cmd + R` - Reset form
- `Tab` - Navigate between calculator tools
- `Enter` - Submit form data

### 📱 Unit Conversions

The calculator features interactive converters for both height and weight:

**Height Units Converter:**
- Convert between Centimeters (cm), Meters (m), Millimeters (mm), Feet (ft), Inches (in), and Feet & Inches (ft & in)
- Real-time conversions as you type
- Clean, two-column layout for input and results
- Unit swap functionality for quick conversions
- Placeholder values for guidance
- Only shows relevant conversion results for selected units

**Weight Units Converter:**
- Convert between Kilograms (kg), Grams (g), Pounds (lbs), Ounces (oz), Stones (st), and Stones & Pounds (st & lb)
- Immediate results with every input change
- User-friendly interface with placeholder guidance
- Precise formatting based on measurement size
- Selective display of conversion results
- Clear visual distinction between input and output values

### 🎯 Navigation

**Tools Navigation:**
- Access all six calculators from the main homepage
- Dedicated tools overview page with descriptions
- Breadcrumb navigation for easy orientation
- Quick links between related calculators

## 🔬 Technical Implementation

### 🏗️ Architecture

- **Frontend:** Vanilla JavaScript ES6+, HTML5, CSS3
- **Styling:** Custom CSS with Tailwind CSS utility classes
- **Icons:** Lucide Icons for consistent iconography
- **PWA:** Service Worker for offline functionality and caching
- **Storage:** LocalStorage for history and preferences

### 📊 Health Calculation Formulas

```javascript
// BMI Formula
BMI = weight (kg) / height (m)²

// Body Fat Percentage Formulas:
// Navy Method (Male): 495 / (1.0324 - 0.19077×log₁₀(waist-neck) + 0.15456×log₁₀(height)) - 450
// Navy Method (Female): 495 / (1.29579 - 0.35004×log₁₀(waist+hip-neck) + 0.22100×log₁₀(height)) - 450

// Waist-to-Hip Ratio
WHR = waist circumference / hip circumference

// Ideal Weight Formulas:
// Robinson: Male: 52 + 1.9×(height_in - 60) | Female: 49 + 1.7×(height_in - 60)
// Devine: Male: 50 + 2.3×(height_in - 60) | Female: 45.5 + 2.3×(height_in - 60)
// Miller: Male: 56.2 + 1.41×(height_in - 60) | Female: 53.1 + 1.36×(height_in - 60)
// Hamwi: Male: 48 + 2.7×(height_in - 60) | Female: 45.5 + 2.2×(height_in - 60)

// Calorie Calculations (Mifflin-St Jeor Equation)
// Male BMR = 10×weight + 6.25×height - 5×age + 5
// Female BMR = 10×weight + 6.25×height - 5×age - 161

// TDEE = BMR × Activity Factor
// Sedentary: 1.2 | Light: 1.375 | Moderate: 1.55 | Very Active: 1.725 | Extremely Active: 1.9

// Macronutrient Distribution
// Protein: 4 cal/g | Carbohydrates: 4 cal/g | Fats: 9 cal/g
```

### 🎨 Design System

**Color Scheme (Green Health Theme):**
- Primary: `#059669` (Emerald 600)
- Secondary: `#10b981` (Emerald 500)
- Background: `#f9fafb` (Gray 50)
- Text: `#374151` (Gray 700)

**Typography:**
- Font Family: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700

### 📱 Responsive Breakpoints

- Mobile: `320px - 768px`
- Tablet: `768px - 1024px`
- Desktop: `1024px+`

## 🔧 Configuration

### 🌐 SEO Configuration

The project includes comprehensive SEO setup:

- **Meta Tags:** Title, description, keywords, author
- **Open Graph:** Social media sharing optimization
- **Twitter Cards:** Twitter-specific metadata
- **Structured Data:** JSON-LD for rich snippets
- **Sitemap:** XML sitemap for search engines
- **Robots.txt:** Search engine crawler instructions

### 🚀 Deployment Configuration

**Netlify Configuration (`public/netlify.toml`):**
- Build settings and redirects
- Headers for security and performance
- PWA support and caching rules

**Service Worker (`assets/js/sw.js`):**
- Offline functionality
- Asset caching strategy
- Update notifications

## 🎯 Performance

### ⚡ Optimization Features

- **Lazy Loading:** Images and non-critical resources
- **Minification:** CSS and JavaScript optimization
- **Caching:** Service Worker and browser caching
- **Compression:** Gzip/Brotli compression via Netlify
- **CDN:** Google Fonts and Tailwind CSS via CDN

### 📊 Performance Metrics

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms
- **PWA Score:** 100/100

## ♿ Accessibility

### 🔍 WCAG 2.1 AA Compliance

- **Keyboard Navigation:** Full keyboard support
- **Screen Reader:** ARIA labels and semantic HTML
- **Color Contrast:** 4.5:1 minimum ratio
- **Focus Indicators:** Clear visual focus states
- **Text Scaling:** Supports up to 200% zoom

### 🎨 Accessibility Features

- High contrast mode support
- Reduced motion preferences
- Screen reader announcements
- Keyboard shortcuts
- Alternative text for images

## 🔒 Security

### 🛡️ Security Headers

```
Content-Security-Policy: default-src 'self' 'unsafe-inline' https:
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### 🔐 Data Privacy

- **No Data Collection:** All calculations happen locally
- **LocalStorage Only:** History saved locally on device
- **No Analytics:** No tracking or user analytics
- **HTTPS Only:** Secure connection enforced

## 🌍 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 60+ | ✅ Full |
| Firefox | 55+ | ✅ Full |
| Safari | 11+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| Opera | 47+ | ✅ Full |
| Samsung Internet | 8+ | ✅ Full |

### 📱 Mobile Support

- iOS Safari 11+
- Chrome Mobile 60+
- Firefox Mobile 55+
- Samsung Internet 8+
- Opera Mobile 47+

## 🧪 Testing

### ✅ Manual Testing Checklist

- [ ] BMI calculation accuracy across all units
- [ ] Body Fat Calculator - All three methods (Navy, Circumference, Skinfold)
- [ ] Waist-to-Hip Ratio - WHO guidelines compliance
- [ ] Macro Calculator - TDEE and macronutrient distribution
- [ ] Ideal Weight Calculator - All formula accuracy
- [ ] Calorie Calculator - BMR and activity level calculations
- [ ] Interactive unit converters functionality
- [ ] Real-time conversion updates
- [ ] Responsive design on all devices
- [ ] PWA installation and offline usage
- [ ] Form validation and error handling
- [ ] Keyboard navigation across all tools
- [ ] Screen reader compatibility
- [ ] Cross-calculator navigation

### 🔬 Test Scenarios

1. **Input Validation:**
   - Invalid height/weight values across all calculators
   - Age boundaries (15-120) where applicable
   - Unit conversion accuracy
   - Body measurement validation (waist, hip, neck circumferences)

2. **Calculation Tests:**
   - Known BMI values verification
   - Body fat percentage accuracy using standard test cases
   - WHR health risk categorization
   - Macro distribution totaling 100%
   - Ideal weight formula accuracy
   - Calorie calculation validation

3. **User Experience:**
   - Form persistence between sessions
   - Unit converters usability and accuracy
   - Navigation between calculators
   - Results sharing and copying functionality
   - Health recommendations appropriateness

## 🤝 Contributing

### 📝 Development Guidelines

1. **Code Style:**
   - Use meaningful variable names
   - Add comments for complex logic
   - Follow existing code patterns
   - Maintain consistency in indentation

2. **Feature Requests:**
   - Open an issue with detailed description
   - Include use case and benefits
   - Consider accessibility implications

3. **Bug Reports:**
   - Provide steps to reproduce
   - Include browser and device information
   - Add screenshots if relevant

### 🚀 Development Setup

```bash
# Clone repository
git clone https://github.com/your-username/health-calculator-pro.git

# Navigate to project
cd health-calculator-pro

# Start development server
python -m http.server 8000

# Open in browser
open http://localhost:8000
```

## 📄 License

This project is released under the **MIT License**. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Sowrav Hasan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Sowrav Hasan**

- 🌐 Portfolio: [sowravhasan.vercel.app](https://sowravhasan.vercel.app)
- 💼 LinkedIn: [Sowrav Hasan](https://www.linkedin.com/in/sowrav-hasan/)
- 📧 Email: [contact@sowravhasan.dev](mailto:contact@sowravhasan.dev)
- 🐦 Twitter: [@sowravhasan](https://twitter.com/sowravhasan)

## 🔗 Links

- 🌐 **Live Demo:** [health-calculator-pro.netlify.app](https://health-calculator-pro.netlify.app/)
- 📱 **PWA Install:** Available directly from the website
- 📊 **Source Code:** Available on GitHub
- 📋 **Documentation:** This README.md file

## 🎯 Project Stats

- **Lines of Code:** ~4,500+ (JavaScript: ~2,800 lines)
- **Calculator Tools:** 6 comprehensive health calculators
- **File Size:** < 800KB total (optimized)
- **Load Time:** < 2 seconds on 3G
- **PWA Score:** 100/100
- **Accessibility Score:** 100/100
- **Performance Score:** 95+/100
- **SEO Score:** 100/100

## 🗺️ Roadmap

### 🔮 Future Features

- [ ] **Multi-language Support** - Internationalization (i18n)
- [ ] **Health Charts** - Visual health progression charts
- [ ] **Goal Setting** - Weight loss/gain goal tracking
- [ ] **Export Data** - Export health data to CSV/PDF
- [ ] **Additional Calculators** - Heart rate zones, metabolic age
- [ ] **Medical Integration** - Connect with health apps
- [ ] **Voice Input** - Speech recognition for hands-free use
- [ ] **Comparison Tool** - Compare results with averages by demographics
- [ ] **Meal Planning** - Integration with macro calculator
- [ ] **Workout Recommendations** - Exercise suggestions based on goals

### 🎨 Design Improvements

- [ ] **Animation System** - Smooth transitions and micro-interactions
- [ ] **Theme Customization** - Multiple color themes
- [ ] **Component Library** - Reusable UI components
- [ ] **Advanced Charts** - Interactive data visualizations
- [ ] **Mobile App** - Native mobile applications

## 📞 Support

If you encounter any issues or have questions:

1. **Check Documentation:** Review this README and code comments
2. **Search Issues:** Look through existing GitHub issues
3. **Create Issue:** Open a new issue with detailed information
4. **Contact Developer:** Reach out via email or social media

---

---

**⭐ Star this repository if you find it helpful!**

[🏠 Homepage](https://health-calculator-pro.netlify.app/) • [📘 Documentation](README.md) • [🐛 Report Bug](https://github.com/your-username/health-calculator-pro/issues) • [💡 Request Feature](https://github.com/your-username/health-calculator-pro/issues)

*Built with ❤️ by [Sowrav Hasan](https://sowravhasan.vercel.app)*
