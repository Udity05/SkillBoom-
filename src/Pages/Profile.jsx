import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiLock, FiBook, FiCheckCircle } from 'react-icons/fi';
import Spline from '@splinetool/react-spline';

const Profile = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  // Data
  const progressBars = [
    { name: 'Mathematics', percentage: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'Computer Science', percentage: 90, color: 'from-purple-500 to-purple-600' },
    { name: 'Physics', percentage: 75, color: 'from-green-500 to-green-600' },
    { name: 'Literature', percentage: 65, color: 'from-yellow-500 to-yellow-600' },
  ];

  const achievements = [
    { title: 'Course Completionist', status: 'unlocked', icon: <FiAward />, description: 'Completed 5 courses' },
    { title: 'Perfect Score', status: 'unlocked', icon: <FiStar />, description: 'Scored 100% on 3 tests' },
    { title: 'Note Taker', status: 'unlocked', icon: <FiBook />, description: 'Saved 20+ notes' },
    { title: 'Master Student', status: 'locked', icon: <FiLock />, description: 'Complete all courses with 90%+' },
  ];

  const recentCourses = [
    { name: 'Calculus', progress: 100 },
    { name: 'Python Programming', progress: 90 },
    { name: 'Organic Chemistry', progress: 85 },
    { name: 'World History', progress: 70 },
  ];

  const xp = 5040;
  const getSplineScene = () => {
    if (xp < 2000) {
      return 'https://prod.spline.design/jMYKIOVPcSwrqTN5/scene.splinecode'; // Replace with your Beginner scene URL
    } else if (xp >= 2000 && xp <= 5000) {
      return 'https://prod.spline.design/i0ruaIsSETp7mo8w/scene.splinecode'; // Replace with your Intermediate scene URL
    } else {
      return 'https://prod.spline.design/yp7BM9PX71WDYfXs/scene.splinecode'; // Replace with your Advanced scene URL
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 pt-5 sm:pt-7 md:pt-8">
      <div className="max-w-6xl mx-auto pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Profile Card */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold mb-4"
              >
                UB
              </motion.div>

              <motion.h1 variants={slideUp} className="text-2xl font-bold text-white mb-2">
                Udity Banerjee
              </motion.h1>

              <motion.p variants={slideUp} className="text-blue-400 mb-6">
                Advanced Learner • Level 12
              </motion.p>

              <motion.div variants={slideUp} className="flex flex-wrap justify-center gap-2 mb-6">
                {['Honor Student', 'Quick Learner', 'Discussion Leader'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-900/50 rounded-full text-sm text-blue-200 border border-blue-700">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={slideUp} className="w-full grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
                  <p className="text-gray-300 text-sm">Courses</p>
                  <p className="text-xl font-bold text-white">12</p>
                </div>
                <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
                  <p className="text-gray-300 text-sm">Certificates</p>
                  <p className="text-xl font-bold text-white">8</p>
                </div>
                <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
                  <p className="text-gray-300 text-sm">XP</p>
                  <p className="text-xl font-bold text-white">5,040</p>
                </div>
              </motion.div>

              <motion.div variants={slideUp} className="mt-6 w-full">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <FiStar className="mr-2 text-yellow-400" />
                  Level Badge
                </h2>
                <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
                  <Spline scene={getSplineScene()} />
                </div>
                <p className="text-sm text-gray-300 mt-2 text-center">
                  {xp < 2000 ? 'Beginner Badge' : xp <= 5000 ? 'Intermediate Badge' : 'Advanced Badge'}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <motion.h2 variants={slideUp} className="text-xl font-bold text-white mb-6 flex items-center">
              <FiStar className="mr-2 text-yellow-400" />
              Learning Progress
            </motion.h2>

            <div className="space-y-4">
              {progressBars.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1 text-sm text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h2 variants={slideUp} className="text-xl font-bold text-white mt-8 mb-4 flex items-center">
              <FiCheckCircle className="mr-2 text-green-400" />
              Recent Courses
            </motion.h2>

            <div className="space-y-3">
              {recentCourses.map((course, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="p-3 bg-gray-700 rounded-lg border border-gray-600"
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{course.name}</span>
                    <span className="text-blue-400">{course.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        course.progress === 100 ? 'from-green-500 to-green-600' : 'from-blue-500 to-blue-600'
                      }`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <motion.h2 variants={slideUp} className="text-xl font-bold text-white mb-6 flex items-center">
              <FiAward className="mr-2 text-yellow-400" />
              Achievements
            </motion.h2>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg border ${
                    achievement.status === 'locked'
                      ? 'border-gray-600 bg-gray-700/50'
                      : 'border-yellow-500/50 bg-yellow-900/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      achievement.status === 'locked'
                        ? 'bg-gray-600 text-gray-400'
                        : 'bg-yellow-900/30 text-yellow-400'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className={`font-medium ${
                        achievement.status === 'locked' ? 'text-gray-400' : 'text-white'
                      }`}>
                        {achievement.title}
                        <span className={`ml-2 text-xs ${
                          achievement.status === 'locked' ? 'text-gray-500' : 'text-yellow-400'
                        }`}>
                          {achievement.status === 'locked' ? 'Locked' : 'Unlocked'}
                        </span>
                      </h3>
                      <p className={`text-sm ${
                        achievement.status === 'locked' ? 'text-gray-500' : 'text-gray-300'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h2 variants={slideUp} className="text-xl font-bold text-white mt-8 mb-4 flex items-center">
              <FiBook className="mr-2 text-purple-400" />
              Learning Stats
            </motion.h2>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Hours Learned', value: '142', color: 'text-blue-400' },
                { label: 'Notes Taken', value: '87', color: 'text-green-400' },
                { label: 'Tests Taken', value: '24', color: 'text-purple-400' },
                { label: 'Streak Days', value: '15', color: 'text-yellow-400' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="p-3 bg-gray-700 rounded-lg border border-gray-600 text-center"
                >
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                  <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
